import React, { useState, useMemo } from 'react';
import styles from './index.module.css';
import { notes } from './notesData';
import { FaChevronLeft, FaChevronRight, FaSun } from 'react-icons/fa';

// 日历组件
const Calendar = ({ selectedDate, onDateChange }) => {
  const [displayDate, setDisplayDate] = useState(selectedDate);

  const handlePrevMonth = () => {
    setDisplayDate(new Date(displayDate.getFullYear(), displayDate.getMonth() - 1, 1));
  };

  const handleNextMonth = () => {
    setDisplayDate(new Date(displayDate.getFullYear(), displayDate.getMonth() + 1, 1));
  };

  const handleToday = () => {
    const today = new Date();
    setDisplayDate(today);
    onDateChange(today);
  };

  const generateDays = () => {
    const year = displayDate.getFullYear();
    const month = displayDate.getMonth();
    const firstDayOfWeek = new Date(year, month, 1).getDay();
    const lastDateOfMonth = new Date(year, month + 1, 0).getDate();
    const lastDateOfPrevMonth = new Date(year, month, 0).getDate();

    const days = [];
    // 填充上个月的尾巴
    for (let i = firstDayOfWeek; i > 0; i--) {
      days.push({ day: lastDateOfPrevMonth - i + 1, isCurrentMonth: false });
    }
    // 填充本月日期
    for (let i = 1; i <= lastDateOfMonth; i++) {
      days.push({ day: i, isCurrentMonth: true });
    }
    // 填充下个月的开头
    const remainingCells = 42 - days.length;
    for (let i = 1; i <= remainingCells; i++) {
      days.push({ day: i, isCurrentMonth: false });
    }
    return days;
  };

  const weekDays = ['日', '一', '二', '三', '四', '五', '六'];
  const calendarDays = generateDays();

  return (
    <div className={styles.calendar}>
      <div className={styles.calendarHeader}>
        <button onClick={handlePrevMonth}><FaChevronLeft /></button>
        <span>{displayDate.getFullYear()}年 {displayDate.getMonth() + 1}月</span>
        <button onClick={handleNextMonth}><FaChevronRight /></button>
        <button onClick={handleToday} className={styles.todayButton}>今天</button>
      </div>
      <div className={styles.calendarGrid}>
        {weekDays.map(day => <div key={day} className={styles.weekDay}>{day}</div>)}
        {calendarDays.map((d, i) => {
          const isSelected = d.isCurrentMonth && 
                             d.day === selectedDate.getDate() && 
                             displayDate.getMonth() === selectedDate.getMonth() &&
                             displayDate.getFullYear() === selectedDate.getFullYear();
          const hasNote = d.isCurrentMonth && notes.some(note => new Date(note.date).setHours(0,0,0,0) === new Date(displayDate.getFullYear(), displayDate.getMonth(), d.day).setHours(0,0,0,0));

          return (
            <div 
              key={i} 
              className={`${styles.day} ${d.isCurrentMonth ? '' : styles.otherMonth} ${isSelected ? styles.selectedDay : ''} ${hasNote ? styles.hasNote : ''}`}
              onClick={() => d.isCurrentMonth && onDateChange(new Date(displayDate.getFullYear(), displayDate.getMonth(), d.day))}
            >
              {d.day}
            </div>
          );
        })}
      </div>
    </div>
  );
};

// 随笔区域主组件
function NotesSection() {
  const [selectedDate, setSelectedDate] = useState(new Date('2025-06-10'));

  const selectedNote = useMemo(() => {
    const dateString = selectedDate.toISOString().split('T')[0];
    return notes.find(note => note.date === dateString) || null;
  }, [selectedDate]);

  return (
    <div className={styles.notesSection}>
      <div className={styles.header}>
        <h2 className={styles.title}>随笔随记</h2>
        <p className={styles.subtitle}>我的日常记录...</p>
      </div>
      <div className={styles.mainContent}>
        <div className={styles.leftColumn}>
          <Calendar selectedDate={selectedDate} onDateChange={setSelectedDate} />
          <div className={styles.quote}>
            <p>那些</p>
            <p className={styles.quoteLarge}>浅浅的叙述</p>
            <p>希望能留有痕迹</p>
          </div>
        </div>
        <div className={styles.rightColumn}>
          <div className={styles.noteCard}>
            {selectedNote ? (
              <>
                <div className={styles.noteHeader}>
                  <h3>{selectedNote.title}</h3>
                  <span>{selectedNote.date.slice(5)} {selectedNote.time} <FaSun className={styles.sunIcon} /></span>
                </div>
                <p className={styles.noteContent}>{selectedNote.content}</p>
                <div className={styles.signature}>{selectedNote.signature}</div>
              </>
            ) : (
              <div className={styles.noNote}>今天没有记录哦。</div>
            )}
          </div>
        </div>
      </div>
       <div className={styles.moreButtonContainer}>
        <button className={styles.moreButton}>更多</button>
      </div>
    </div>
  );
}

export default NotesSection;
