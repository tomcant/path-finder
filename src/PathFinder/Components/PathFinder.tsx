import { useState } from "react";
import SearchMap, { Cell } from "../SearchMap";
import SearchMapElem from "./SearchMap";
import { SearchParams, breadthFirstSearch } from "../path-finder";
import Vec2d from "../utils/vec2d";
import sleep from "../utils/sleep";

const getInitialSearchParams = (): SearchParams => ({
  map: new SearchMap(30, 20),
  start: new Vec2d(1, 1),
  target: new Vec2d(28, 18),
});

const PathFinder = (): JSX.Element => {
  const [searchParams, setSearchParams] = useState(getInitialSearchParams());
  const [isDrawing, setIsDrawing] = useState(false);
  const [isMovingStart, setIsMovingStart] = useState(false);
  const [isMovingTarget, setIsMovingTarget] = useState(false);

  const setCell = (pos: Vec2d, cell: Cell): void => {
    searchParams.map.setCell(pos, cell);
    setSearchParams({ ...searchParams });
  };

  const setStart = (pos: Vec2d): void => {
    searchParams.start = pos;
    searchParams.map.setCell(pos, Cell.Empty);
    setSearchParams({ ...searchParams });
  };

  const setTarget = (pos: Vec2d): void => {
    searchParams.target = pos;
    searchParams.map.setCell(pos, Cell.Empty);
    setSearchParams({ ...searchParams });
  };

  const handleMouseUp = (pos: Vec2d): void => {
    setIsDrawing(false);
    setIsMovingStart(false);
    setIsMovingTarget(false);
  };

  const handleMouseDown = (pos: Vec2d): void => {
    if (pos.equals(searchParams.start)) {
      setIsMovingStart(true);
    } else if (pos.equals(searchParams.target)) {
      setIsMovingTarget(true);
    } else {
      setIsDrawing(true);
      setCell(pos, searchParams.map.isEmpty(pos) ? Cell.Wall : Cell.Empty);
    }
  };

  const handleMouseEnter = (pos: Vec2d): void => {
    if (isMovingStart) {
      setStart(pos);
    } else if (isMovingTarget) {
      setTarget(pos);
    } else if (isDrawing) {
      setCell(pos, Cell.Wall);
    }
  };

  const handleStartClick = async (): Promise<void> => {
    let targetNode;

    // @ts-ignore
    for (const searchState of breadthFirstSearch(searchParams)) {
      setCell(searchState.node.pos, Cell.Visited);

      if (searchState.foundTarget) {
        targetNode = searchState.node;
        break;
      }

      await sleep(25);
    }

    if (targetNode) {
      const path: Vec2d[] = [];

      while (targetNode.prev) {
        path.unshift(targetNode.pos);
        targetNode = targetNode.prev;
      }

      path.unshift(searchParams.start);

      for (const pos of path) {
        setCell(pos, Cell.Solution);
        await sleep(50);
      }
    }
  };

  const handleResetClick = (): void => {
    setSearchParams(getInitialSearchParams());
  };

  const handleGenerateClick = (): void => {
    const searchParams = getInitialSearchParams();
    searchParams.map.generateWalls();
    setSearchParams(searchParams);
  };

  return (
    <div className="PathFinder">
      <div className="Controls">
        <button onClick={handleStartClick}>Start</button>
        <button onClick={handleResetClick}>Reset</button>
        <button onClick={handleGenerateClick}>Generate walls</button>
      </div>
      <SearchMapElem
        searchParams={searchParams}
        onMouseUp={handleMouseUp}
        onMouseDown={handleMouseDown}
        onMouseEnter={handleMouseEnter}
      />
    </div>
  );
};

export default PathFinder;
