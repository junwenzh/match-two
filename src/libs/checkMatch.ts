// given a matrix and two cell coordinates

export function checkMatch(
  matrix: number[][],
  start: { x: number; y: number },
  end: { x: number; y: number }
) {
  // check if the two cells are the same
  if (matrix[start.x][start.y] !== matrix[end.x][end.y]) {
    return false;
  }

  return dfs(matrix, undefined, start, end, '', 0) || false;
}

function dfs(
  matrix: number[][],
  visited = new Set<string>(),
  start: { x: number; y: number },
  end: { x: number; y: number },
  direction: string,
  turns: number
): boolean {
  // if turns >= 4, return false
  if (turns === 4) {
    return false;
  }

  // if start is the end, return true
  if (start.x === end.x && start.y === end.y) {
    return true;
  }

  // if start is out of bound, return false
  if (
    start.x < 0 ||
    start.x >= matrix.length ||
    start.y < 0 ||
    start.y >= matrix[0].length
  ) {
    return false;
  }

  // if element = 0, return false
  if (direction !== '' && matrix[start.x][start.y] !== 0) {
    return false;
  }

  // if start is not the end, but it is visited, return false
  const key = `${direction}:${start.x},${start.y}`;

  if (visited.has(key)) {
    return false;
  }

  // mark current cell as visited
  visited.add(key);

  const goUp = dfs(
    matrix,
    visited,
    { x: start.x - 1, y: start.y },
    end,
    'up',
    direction === 'up' ? turns : turns + 1
  );
  const goDown = dfs(
    matrix,
    visited,
    { x: start.x + 1, y: start.y },
    end,
    'down',
    direction === 'down' ? turns : turns + 1
  );
  const goLeft = dfs(
    matrix,
    visited,
    { x: start.x, y: start.y - 1 },
    end,
    'left',
    direction === 'left' ? turns : turns + 1
  );
  const goRight = dfs(
    matrix,
    visited,
    { x: start.x, y: start.y + 1 },
    end,
    'right',
    direction === 'right' ? turns : turns + 1
  );

  return goUp || goDown || goLeft || goRight;
}
