import styles from './search_header.module.css';
import React, { memo, useRef } from 'react';

//검색이라는 이벤트가 발생하면 callback함수를 불러
//onSearch에 검색된 결과값을 호출해줄거다.
const SearchHeader = memo(({ onSearch }) => {
    const inputRef = useRef();

    const handleSearch = () => {
        const value = inputRef.current.value;
        onSearch(value);
    };
    const onClick = () => {
        handleSearch();
    };
    const onKeyPress = (event) => {
        if (event.key === 'Enter') {
            handleSearch();
        }
    };

    return <header className={styles.header}>
        <divs className={styles.logo}>
            <img className={styles.img} src="./images/logo.png" alt="logo" />
            <h1 className={styles.title}>Youtube</h1>
        </divs>
        <input ref={inputRef} className={styles.input} type="search" placeholder="Search..." onKeyPress={onKeyPress} />
        <button className={styles.button} type="submit" onClick={onClick}>
            <img className={styles.buttonImg} src="images/search.png" alt="search" />
        </button>
    </header>
}
);

export default SearchHeader;