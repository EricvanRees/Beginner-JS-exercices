/* 
Write a JavaScript program that accepts a month in the format mm/yyyy and display the month's calendar.
*/ 

function formatMonthWithTemporal(year, month) {
  const labels = ["M", "T", "W", "Th", "F", "S", "Su"];
  const colWidth = 4; // width of each column (keeps alignment)

  // Build header line
  const header = labels.map(l => l.padEnd(colWidth)).join('');

  // Use PlainYearMonth / PlainDate to get days & weekday (1 = Monday ... 7 = Sunday)
  const ym = Temporal.PlainYearMonth.from({ year, month });
  const daysInMonth = ym.daysInMonth;
  const firstDay = Temporal.PlainDate.from({ year, month, day: 1 });
  const startIndex = firstDay.dayOfWeek - 1; // 0-based index for Monday

  const lines = [header];

  // Prepare first week with blanks up to the first day
  let week = Array(7).fill(''.padEnd(colWidth));
  let day = 1;
  let idx = startIndex;

  while (day <= daysInMonth) {
    week[idx] = String(day).padEnd(colWidth);
    idx++;
    if (idx === 7) {
      lines.push(week.join(''));
      week = Array(7).fill(''.padEnd(colWidth));
      idx = 0;
    }
    day++;
  }

  // push final incomplete week if it contains any day
  if (week.some(cell => cell.trim() !== '')) {
    lines.push(week.join(''));
  }

  return lines.join('\n');
}

// Example: print September 2025
console.log(formatMonthWithTemporal(2025, 10));


