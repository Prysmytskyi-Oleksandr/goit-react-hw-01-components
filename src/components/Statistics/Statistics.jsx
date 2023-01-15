import PropTypes from 'prop-types';
import styles from "./statistics.module.css"

export default function Statistics({title, stats}) {
  const list = stats.map(stat => {
      
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);

    return(
      <li key={stat.id} className={styles.item} style={{ backgroundColor: `#${randomColor}` }}>
      <span className={styles.label}>{stat.label}</span>
      <span className={styles.percentage}>{stat.percentage}%</span>
    </li>)
  })
    
    return (
<section className={styles.statistics}>
{title && <h2  className={styles.title}>{title}</h2>}       

  <ul  className={styles.stat_list}>
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