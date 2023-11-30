import React, { useState } from 'react';
import { addDays, format } from 'date-fns';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';


const currentDate = new Date();
const currentMonth = currentDate.getMonth();
const currentYear = currentDate.getFullYear();
const pastMonth = new Date(currentYear, currentMonth, 1);

export default function DatePickerComponent() {
  const defaultSelected = {
    from: pastMonth,
    to: addDays(pastMonth, 4),
  };
  const [range, setRange] = useState(defaultSelected);

//   let footer = <p>Please pick the first day.</p>;
//   if (range && range.from) {
//     if (!range.to) {
//       footer = <p>{format(range.from, 'PPP')}</p>;
//     } else if (range.to) {
//       footer = (
//         <p>
//           {format(range.from, 'PPP')}–{format(range.to, 'PPP')}
//         </p>
//       );
//     }
//   }

  const disabledDays = [
    new Date(2022, 5, 10),
    new Date(2022, 5, 12),
    new Date(2022, 5, 20),
    { from: new Date(2023, 11, 18), to: new Date(2023, 11, 26) }
  ];

  return (
    <DayPicker
      id="test"
      mode="range"
      defaultMonth={pastMonth}
      selected={range}
    //   footer={footer}
      onSelect={setRange}
      numberOfMonths={2}
      disabled={disabledDays}
      className='shadow-2xl p-5 m-0 flex justify-center rounded-2xl'
    />
  );
}
