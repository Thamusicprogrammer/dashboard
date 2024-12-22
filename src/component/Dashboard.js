import React, { useState } from "react";
import styles from "./dashboard.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faBook,
  faUsers,
  faPlus,
  faList,
  faCaretDown,
  faGraduationCap, // Add this icon
  faUserGroup, // Add this icon
} from "@fortawesome/free-solid-svg-icons";

export default function Dashboard() {
  const [isBatchDropdownOpen, setIsBatchDropdownOpen] = useState(false);

  const toggleBatchDropdown = () => {
    setIsBatchDropdownOpen(!isBatchDropdownOpen);
  };

  const daysInMonth = new Date(2024, new Date().getMonth() + 1, 0).getDate();

  return (
    <div className={styles.dashboardWrapper}>
      <nav className={styles.nav}>
        <h1>HTA</h1>
        <div className={styles.listGroup}>
          <span>Admin Panel</span>
          <a href="#" className={`${styles.navLink} ${styles.active}`}>
            <FontAwesomeIcon icon={faHome} /> Dashboard
          </a>
          <a href="#" className={styles.navLink}>
            <FontAwesomeIcon icon={faBook} /> Skills & Courses
          </a>
          <div className={styles.navItemWithDropdown}>
            <a href="#" className={styles.navLink} onClick={toggleBatchDropdown}>
            <FontAwesomeIcon icon={faUserGroup} />
              Batches <FontAwesomeIcon icon={faCaretDown} className={styles.dropdownIcon} />
            </a>
            {isBatchDropdownOpen && (
              <div className={styles.dropdown}>
                <a href="#" className={styles.dropdownItem}>
                  <FontAwesomeIcon icon={faPlus} /> Add New Batch
                </a>
                <a href="#" className={styles.dropdownItem}>
                  <FontAwesomeIcon icon={faList} /> View All Batches
                </a>
               
              </div>
            )}
          </div>
          <a href="#" className={styles.navLink}>
            <FontAwesomeIcon icon={faUsers} /> Trainee
          </a>
        </div>
        <div className={styles.listGroup}>
          <span>ACTION</span>
          <a href="#" className={`${styles.active} ${styles.navLink}`}>
            <i>👤</i> New User
          </a>
          <a href="#" className={styles.navLink}>
            <i>✏️</i> Update Data
          </a>
          <a href="#" className={styles.navLink}>
            <i>📅</i> Add Events
          </a>
        </div>
      </nav>

      <main className={styles.main}>
        <h2>QUICK STATS</h2>
        <br></br>
        <div className={styles.stats}>
          <div className={`${styles.cards} ${styles.animatedCard}`}>
            <h3>200</h3>
            <span>Our Staffs</span>
          </div>
          <div className={`${styles.cards} ${styles.animatedCard}`}>
            <h3>100</h3>
            <span>Instructors</span>
          </div>
          <div className={`${styles.cards} ${styles.animatedCard}`}>
            <h3>500</h3>
            <span>Monthly Visitors</span>
          </div>
          <div className={`${styles.cards} ${styles.animatedCard}`}>
            <h3>300</h3>
            <span>Trainees</span>
          </div>
        </div>

        <div className={styles.sections}>
          {/* Calendar Section */}
          <div className={styles.card}>
            <h2>CALENDAR</h2>
            <div className={styles.calendar}>
              {[...Array(daysInMonth)].map((_, day) => (
                <div
                  key={day + 1}
                  className={`${styles.calendarDay} ${
                    day + 1 === new Date().getDate() ? styles.today : ""
                  }`}
                >
                  {day + 1}
                </div>
              ))}
            </div>
          </div>

          {/* Data Table Section */}
          <div className={styles.card}>
            <h2>DATA</h2>
            <div className={styles.buttons}>
              <button className={styles.btn}>🔍</button>
              <button className={styles.btn}>🔃</button>
            </div>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Age</th>
                  <th>Data</th>
                  <th>Progress</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>20-30</td>
                  <td>19%</td>
                  <td>✅</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>20-40</td>
                  <td>40%</td>
                  <td>📊</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>40-50</td>
                  <td>20%</td>
                  <td>📈</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>50+</td>
                  <td>11%</td>
                  <td>❌</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}
