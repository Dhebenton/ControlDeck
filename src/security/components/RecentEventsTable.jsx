import { recentEvents } from "../../data/recentEvents"

function RecentEventsTable() {
    const visibleRows = recentEvents.slice(0, 5)

    return (
        <table>
            <thead>
                <tr>
                    <th>Time Stamp</th>
                    <th>Event Type</th>
                    <th>Source IP</th>
                    <th>Status</th>
                    <th>Security Score</th>
                    <th>Location</th>
                    <th>User Agent</th>
                    <th>Triggered Rule</th>
                </tr>
            </thead>
            <tbody>
                {visibleRows.map((event, index) => (
                    <tr key={index} className="table-rse">
                        <td>{event.time_stamp}</td>
                        <td>{event.event_type}</td>
                        <td>{event.source_ip}</td>
                        <td>{event.status}</td>
                        <td className="f-row g16"> 
                            <div className="table-security-score-bar" >
                                <div className="table-security-score" style={{ width: `${event.security_score}%` }}></div>
                            </div>
                            {event.security_score}
                        </td>
                        <td>{event.location}</td>
                        <td>{event.user_agent}</td>
                        <td>{event.triggered_rule}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default RecentEventsTable

