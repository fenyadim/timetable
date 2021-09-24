import React from 'react';
import styles from './Lesson.module.scss';

function Lesson({data}) {
  return (
    <div className={styles.wrapper}>
      {data?.lessons.map((item, index) => (
        <div className={styles.offer} key={index}>
          <p>{data.time}</p>
          <div>
            <h2 className={styles.lessionName}>{item.name}</h2>
            <p className={styles.typeAndTeacher}>
              ({item.type}) {item.teacher}
            </p>
          </div>
          <p className={styles.cabinet}>{item.number}</p>
        </div>
      ))}
    </div>
  );
}

export default Lesson;
