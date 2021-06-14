import PriorityQueue from "ts-priority-queue";
import { SearchMethod, SearchNode, SearchParams, SearchState, rewind } from "../";
import Vec2d from "../utils/Vec2d";

const manhattanDistance = (a: Vec2d, b: Vec2d): number => Math.abs(a.x - b.x) + Math.abs(a.y - b.y);

const start = function* ({ map, start, target }: SearchParams): Generator<SearchState> {
  const visited = new Set<string>([start.toString()]);

  const queue = new PriorityQueue<SearchNode>({
    comparator: (a, b) => manhattanDistance(a.pos, target) - manhattanDistance(b.pos, target),
    initialValues: [{ pos: start }],
  });

  while (queue.length > 0) {
    const node = queue.dequeue();

    yield { current: node, visited, found: node.pos.equals(target) };

    for (const neighbour of map.getNeighbours(node.pos)) {
      const hash = neighbour.toString();

      if (!visited.has(hash)) {
        visited.add(hash);
        queue.queue({ pos: neighbour, prev: node });
      }
    }
  }
};

const greedyBestFirstSearch: SearchMethod = { name: "Greedy best-first search", start, rewind };

export default greedyBestFirstSearch;
