import { gql, useQuery } from '@apollo/client';
import React from 'react';
import Lesson from './components/Lesson/Lesson';
import Loader from './components/Loader/Loader';

import styles from './App.module.scss';

const GET_DATA = gql`
  query($oddOrEven: OddOrEven) {
    calendars(where: { oddOrEvenList: $oddOrEven }) {
      weekday
      timetables {
        time
        lessions {
          name
          type
          teacher
          cabinet
        }
      }
    }
  }
`;

function App() {
  const [oddOrEven, setOddOrEven] = React.useState('');
  const { loading, error, data } = useQuery(GET_DATA, { variables: { oddOrEven } });
  const items = data?.calendars;

  React.useEffect(() => {
    const nowData = new Date();
    const startData = new Date(nowData.getFullYear(), 0, 1);
    const diff = Math.round((nowData - startData) / (1000 * 60 * 60 * 24 * 7));
    diff % 2 ? setOddOrEven('odd') : setOddOrEven('even');
  }, []);

  const fetchLessionsData = (obj) => {
    return obj?.timetables.map((item, index) => (
      <Lesson key={index} time={item.time} lessions={item.lessions} />
    ));
  };

  return (
    <div className={`${error ? styles.containerError : styles.container}`}>
      {!error ? (
        !loading ? (
          <>
            <h1 className={styles.oddOrEvenName}>
              <span
                onClick={() => {
                  oddOrEven === 'even' ? setOddOrEven('odd') : setOddOrEven('even');
                }}>
                {oddOrEven === 'even' ? 'Четная' : 'Нечетная'}
              </span>{' '}
              неделя
            </h1>
            <div className={styles.offerTimetable}>
              {items?.map((obj) => (
                <div>
                  <h2 className={styles.weekday}>{obj.weekday}</h2>
                  <div className={styles.offerLessonGroup}>{fetchLessionsData(obj)}</div>
                </div>
              ))}
            </div>
          </>
        ) : (
          <Loader />
        )
      ) : (
        <h1 className={styles.errorTitle}>😓 Что-то пошло не так! 🤥</h1>
      )}
    </div>
  );
}

export default App;
