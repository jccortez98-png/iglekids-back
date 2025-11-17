export function buildCSV(rows: any[][]): string {
  return rows.map(r =>
    r
      .map(v => `"${String(v).replace(/"/g, '""')}"`)
      .join(",")
  ).join("\n");
}
