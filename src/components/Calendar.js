import React from 'react';
import dateFns from "date-fns";

const Calendar = ({event}) => {

    return (
        <div className='Calendar'>
           Calendar
        </div>
    );
}

export default Calendar;


//
// import React from "react";
// import dateFns from "date-fns";
//
// class Calendar extends React.Component {
// 	state = {
// 		currentMonth: new Date(),
// 		selectedDate: new Date()
// 	};
//
// 	renderHeader() {
// 		const dateFormat = "MMMM YYYY";
//
// 		return (
// 			<div className="header row flex-middle">
// 				<div className="col col-start">
// 					<div className="icon" onClick={this.prevMonth}>
// 						chevron_left
// 					</div>
// 				</div>
// 				<div className="col col-center">
// 					<span>{dateFns.format(this.state.currentMonth, dateFormat)}</span>
// 				</div>
// 				<div className="col col-end" onClick={this.nextMonth}>
// 					<div className="icon">chevron_right</div>
// 				</div>
// 			</div>
// 		);
// 	}
//
// 	renderDays() {
// 		const dateFormat = "dddd";
// 		const days = [];
//
// 		let startDate = dateFns.startOfWeek(this.state.currentMonth);
//
// 		for (let i = 0; i < 7; i++) {
// 			days.push(
// 				<div className="col col-center" key={i}>
// 					{dateFns.format(dateFns.addDays(startDate, i), dateFormat)}
// 				</div>
// 			);
// 		}
//
// 		return <div className="days row">{days}</div>;
// 	}
//
// 	renderCells() {
// 		const { currentMonth, selectedDate } = this.state;
// 		const monthStart = dateFns.startOfMonth(currentMonth);
// 		const monthEnd = dateFns.endOfMonth(monthStart);
// 		const startDate = dateFns.startOfWeek(monthStart);
// 		const endDate = dateFns.endOfWeek(monthEnd);
//
// 		const dateFormat = "D";
// 		const rows = [];
//
// 		let days = [];
// 		let day = startDate;
// 		let formattedDate = "";
//
// 		while (day <= endDate) {
// 			for (let i = 0; i < 7; i++) {
// 				formattedDate = dateFns.format(day, dateFormat);
// 				const cloneDay = day;
// 				days.push(
// 					<div
// 						className={`col cell ${
// 							!dateFns.isSameMonth(day, monthStart)
// 								? "disabled"
// 								: dateFns.isSameDay(day, selectedDate) ? "selected" : ""
// 							}`}
// 						key={day}
// 						onClick={() => this.onDateClick(dateFns.parse(cloneDay))}
// 					>
// 						<span className="number">{formattedDate}</span>
// 						<span className="bg">{formattedDate}</span>
// 					</div>
// 				);
// 				day = dateFns.addDays(day, 1);
// 			}
// 			rows.push(
// 				<div className="row" key={day}>
// 					{days}
// 				</div>
// 			);
// 			days = [];
// 		}
// 		return <div className="body">{rows}</div>;
// 	}
//
// 	onDateClick = day => {
// 		this.setState({
// 			selectedDate: day
// 		});
// 	};
//
// 	nextMonth = () => {
// 		this.setState({
// 			currentMonth: dateFns.addMonths(this.state.currentMonth, 1)
// 		});
// 	};
//
// 	prevMonth = () => {
// 		this.setState({
// 			currentMonth: dateFns.subMonths(this.state.currentMonth, 1)
// 		});
// 	};
//
// 	render() {
// 		return (
// 			<div className="calendar">
// 				{this.renderHeader()}
// 				{this.renderDays()}
// 				{this.renderCells()}
// 			</div>
// 		);
// 	}
// }

//     <%
//
//
// 				'Start permissions check
// If Session('bolManagePermissions') = true Then
//
// 				%>
//
// 					<td  >
// 						<p>
// 							<a HREF='#' ONCLICK='window.open('../admin/users.html','users','width=500,height=400');'>
// Users
// </a>
//
// </p>
// </td>
//     <td  >
//         <p>
//             <a HREF='#' ONCLICK='window.open('../admin/bookers.html','users','width=500,height=400');'>
//                 Venues
//             </a>
//
//         </p>
//     </td>
//
//     <%
//
// End If
//
// %>
// </tr>
// </table>
// </form>
// </td>
// </tr>
//     <tr>
//         <td VALIGN='TOP'>
//             <table     >
//                 <tr>
//                     <td>
//                         <!-- Now we create the table --->
//                         <table    >
//                             <tr>
//                                 <td   className='dowLabeltd'>
//                                     <h1>
//                                         Sun
//
//                                 </td>
//                                 <td   className='dowLabeltd'>
//                                     <h1>
//                                         Mon
//
//                                 </td>
//                                 <td   className='dowLabeltd'>
//                                     <h1>
//                                         Tue
//
//                                 </td>
//                                 <td    className='dowLabeltd'>
//                                     <h1>
//                                         Wed
//
//                                 </td>
//                                 <td    className='dowLabeltd'>
//                                     <h1>
//                                         Thur
//
//                                 </td>
//                                 <td    className='dowLabeltd'>
//                                     <h1>
//                                         Fri
//
//                                 </td>
//                                 <td    className='dowLabeltd'>
//                                     <h1>
//                                         Sat
//
//                                 </td>
//                             </tr>
//                             <%
//
//                             for introwsLoop= 1 to introws
//                             'new row
// 								response.write '<tr>' & vbCrlF & tab(9)
// 								For intColumnsLoop = 1 to intColumns
// 									'create new column
//
//                             'if there's a day there display it else black it out
//                                If arrCalendarDays((introwsLoop-1) *7 + intColumnsLoop)>0 then
//                             'display date and determine whether or not there is an event for that day
// 										if not objRS.EOF then
//
//
// 											Response.write '<td VALIGN=''middle'' ALIGN=''center''  HEIGHT = ''' & formatPercent(1/introws,0) & ''' className=''Daytd''>'& vbCrlF & tab(10)
// 											Response.write '<table CELLSPACING=''0'' CELLPADDING = ''0'' BORDER = ''0'' WIDTH=''100%'' HEIGHT= ''' & formatPercent(1/introws,0) & '''>' & vbCrlF & tab(11)
//
// 											'write the day in the upper right handcorner
//                                Response.write '<tr>' & vbCrlF & tab(12) & '<td ALIGN =''left'' VALIGN=''middle'' HEIGHT=''30'' >' & vbCrlF & tab(13)
//                             Response.write '&nbsp;<B><a href=''displayDetails.asp?date=' & arrCalendarDays((introwsLoop - 1) *7 + intColumnsLoop) & '/' &Month(dbCurrentdate)& '/' &Year(dbCurrentdate) & ''' className=''menu'' TARget=''list''>' & arrCalendarDays((introwsLoop - 1) *7 + intColumnsLoop) & '</a></B>&nbsp;'
//                     subWriteEvents
//                     Response.write vbCrlF & tab(12) &'</td>'  & vbCrlF & tab(11) & '</tr>' & vbCrlF & tab(10)
// Response.write vbCrlF & tab(8) &'</table>'
// Response.write vbCrlF & tab(7) & '</td>' &vbCrlF & tab(7)
//
//
//
// 'write the calendar event for that day if it exists
// 'First check EOF
//
//
//
// intdisplayDay = arrCalendarDays((introwsLoop - 1) *7 + intColumnsLoop)
// 'now check if current record contains current day in it's day column
// if objRS('Day') = arrCalendarDays((introwsLoop - 1) *7 + intColumnsLoop) then
//
//
//
// 'sets the day event count to 0
//
// strDailyEvents = 0
// 'write out event 1
// 'display the title while the dbday is equal to the cell number
// do while cint(intdisplayDay) = arrCalendarDays((introwsLoop - 1) *7 + intColumnsLoop)
//
//
//
// 'Response.write strDailyEvents
//
// objRS.MoveNext
// strDailyEvents = strDailyEvents +1
//
// if strDailyEvents > 1 then
// strEvents = ' Events'
//
// else
// strEvents = ' event'
// end if
//
//
// 'check to see if it's at the end of the record set or moved to a different day
// if objRS.eof = true then
//
// 'subWriteEvents
//
//
// 'Response.write '<br><b>' & strDailyEvents & '</b>' & strEvents & ' entered<br>'
//         intdisplayDay = 0
//
//
//         else
//         if objRS('day') <> intdisplayDay then
//
//         'subWriteEvents
//
//         'Response.write '<br><b>' & strDailyEvents & '</b>' & strEvents & ' entered<br>'
//             intdisplayDay = 0
//             strDayBooked = 0
//             end if
//             end if
//
//
//
//             loop
//
//             end if
//
//             '---------------------------------------------------------------------------------------
//             Else
//
//             Response.write '<td VALIGN=''middle'' ALIGN=''center''  HEIGHT = ''' & formatPercent(1/introws,0) & ''' className=''Daytd''>'& vbCrlF & tab(10)
//                 Response.write '<table CELLSPACING=''0'' CELLPADDING = ''0'' BORDER = ''0'' WIDTH=''100%'' HEIGHT= ''' & formatPercent(1/introws,0) & '''>' & vbCrlF & tab(11)
//
//                 'write the day in the upper right handcorner
//                 Response.write '<tr>' & vbCrlF & tab(12) & '<td ALIGN =''left'' VALIGN=''middle'' HEIGHT=''30'' >' & vbCrlF & tab(13)
//                     Response.write '<B><a href=''displayDetails.asp?date=' & arrCalendarDays((introwsLoop - 1) *7 + intColumnsLoop) & '/' &Month(dbCurrentdate)& '/' &Year(dbCurrentdate) & ''' className=''menu'' TARget=''list''>' & arrCalendarDays((introwsLoop - 1) *7 + intColumnsLoop) & '</a></B>'
//             subWriteEvents
//             Response.write vbCrlF & tab(12) &'</td>'  & vbCrlF & tab(11) & '</tr>' & vbCrlF & tab(10)
//         Response.write vbCrlF & tab(8) &'</table>'
//         Response.write vbCrlF & tab(7) & '</td>' &vbCrlF & tab(7)
//         end if
//
//
//
//
//         else
//         'black out the cell
//         Response.write vbCrlF & tab(9) & '<td>' & vbCrlF & tab(10) & '&nbsp;' & vbCrlF & tab(9) & '</td>'
//         End If
//         Next
//
//         'close the row
//         Response.write vbCrlF & tab(8) & '</tr>'
//
// Next
//
// 'Close and free the recordset and connection
// objRS.Close
// Set objRS = Nothing
// ObjConn.Close
// Set objConn = Nothing
// %>

// </table>
//
//
//
// </td>
// </tr>
// </table>
//         </div>