import PropTypes from 'prop-types';

export default function Statistics({title, stats}) {
    const list = stats.map(stat => <li key = {stat.id}  className="item">
      <span  className="label">{stat.label}</span>
        <span  className="percentage">{stat.percentage }%</span>
    </li>)
    
    return (
        <section  className="statistics">
  <h2  className="title">{title}</h2>
  <ul  className="stat-list">
    {list}
  </ul>
</section>
    )
}

Statistics.protoTypes = {
    title: PropTypes.string,
    stats: PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
    })
}

Statistics.defaultProps = {
    title: ""
}