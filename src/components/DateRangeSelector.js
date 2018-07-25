import React from 'react';
import Utils from '../Utils';

import DisplayDateRange from './DisplayDateRange';

const _utils = new Utils;

const DateRangeSelector = () => {
	return (
		<div className='DateRangeSelector'>
			<DisplayDateRange />
		</div>
	);
};

export default DateRangeSelector;

//                         <td   className='dateSelectiontd'>
//                             <p>
//                                 <select SIZE='1' name='date' onchange='javascript:this.form.submit();' className='select100'>
//                                     <option value='<%=DateSerial(year(dbCurrentdate), 1, 1)%>' <% if Month(dbCurrentdate) = 1 then Response.write ' SELECTED' %>>
//                                     January
//                                 </option>
//                                 <option value='<%=DateSerial(year(dbCurrentdate), 2, 1)%>'
//                                 <% if Month(dbCurrentdate) = 2 then Response.write ' SELECTED' %>>
//                                 February
//                             </option>
//                             <option value='<%=DateSerial(year(dbCurrentdate), 3, 1)%>'
//                             <% if Month(dbCurrentdate) = 3 then Response.write ' SELECTED' %>>
//                             March
//                         </option>
//                         <option value='<%=DateSerial(year(dbCurrentdate), 4, 1)%>'
//                         <% if Month(dbCurrentdate) = 4 then Response.write ' SELECTED' %>>
//                         April
//                     </option>
//                     <option value='<%=DateSerial(year(dbCurrentdate), 5, 1)%>'
//                     <% if Month(dbCurrentdate) = 5 then Response.write ' SELECTED' %>>
//                     May
//                 </option>
//                 <option value='<%=DateSerial(year(dbCurrentdate), 6, 1)%>'
//                 <% if Month(dbCurrentdate) = 6 then Response.write ' SELECTED' %>>
//                 June
//             </option>
//             <option value='<%=DateSerial(year(dbCurrentdate), 7, 1)%>'
//             <% if Month(dbCurrentdate) = 7 then Response.write ' SELECTED' %>>
//             July
//         </option>
//         <option value='<%=DateSerial(year(dbCurrentdate), 8, 1)%>'
//         <% if Month(dbCurrentdate) =8 then Response.write ' SELECTED' %>>
//         August
//         </option>
//         <option value='<%=DateSerial(year(dbCurrentdate), 9, 1)%>'
//         <% if Month(dbCurrentdate) = 9 then Response.write ' SELECTED' %>>
//         September
//         </option>
//         <option value='<%=DateSerial(year(dbCurrentdate), 10, 1)%>'
//         <% if Month(dbCurrentdate) = 10 then Response.write ' SELECTED' %>>
//         October
//         </option>
//         <option value='<%=DateSerial(year(dbCurrentdate), 11, 1)%>'
//         <% if Month(dbCurrentdate) = 11 then Response.write ' SELECTED' %>>
//         November
//         </option>
//         <option value='<%=DateSerial(year(dbCurrentdate), 12, 1)%>'
//         <% if Month(dbCurrentdate) = 12 then Response.write ' SELECTED' %>>
//         December
//         </option>
//         </SELECT>
//         &nbsp;
//         &nbsp;
//
//         <a HREF = 'calendar.asp?date=<%=  DateSerial(2016,Month(dbCurrentdate),1)%>'>2016</a>&nbsp;|&nbsp;
//         <a HREF = 'calendar.asp?date=<%=  DateSerial(2017,Month(dbCurrentdate),1)%>'>2017</a>&nbsp;|&nbsp;
//         <a HREF = 'calendar.asp?date=<%=  DateSerial(2018,Month(dbCurrentdate),1)%>'>2018</a>&nbsp;|&nbsp;
//         <a HREF = 'calendar.asp?date=<%=  DateSerial(2019,Month(dbCurrentdate),1)%>'>2019</a>&nbsp;|&nbsp;
//         <a HREF = 'calendar.asp?date=<%=  DateSerial(2020,Month(dbCurrentdate),1)%>'>2020</a>
//         </p>
//         </p>
//         </td>
//         <td   className='dateSelectiontd'>
//             <p>
//                 <a HREF='calendar.asp?date=<%=strPrevMonth%>'>
//                     &lt;&lt; Previous month
//                 </a>
//                 &nbsp;|&nbsp;
//                 <a HREF='calendar.asp?date=<%=strnextMonth%>'>
//                     Next month &gt;&gt;
//                 </a>
//             </p>
//         </td>
//         <td  >
//             <p>
//                 <a HREF='calendar.asp?date=<%=dbCurrentdate%>'>
//                     Refresh
//                 </a>
//
//             </p>
// </td>