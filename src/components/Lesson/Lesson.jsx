import React from 'react';
import styles from './Lesson.module.scss';

function Lesson({ time, lessions }) {
  const { cabinet, name, teacher, type } = lessions[0];
  return (
    <div className={styles.offer}>
      <p>{time}</p>
      <div>
        <h2 className={styles.lessionName}>{name}</h2>
        <p className={styles.typeAndTeacher}>
          ({type}) {teacher}
        </p>
      </div>
      <p className={styles.cabinet}>{cabinet}</p>
    </div>
  );
}

export default Lesson;
