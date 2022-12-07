import React, { useEffect, useContext, useState } from 'react';
import Container from "react-bootstrap/Container";
import PaginationList from '../PageComponents/PaginationList';
import BookmarksList from '../PageComponents/BookmarksPageComponents/BookmarksList';

const BookmarksPage = () => {
    let [bookmarksContent, setBookmarksContent] = useState(null);
    const url = "https://localhost:5001/api/user/bookmarks"; 

    useEffect(() => {
    }, [bookmarksContent]);

    return (
        <Container>
            <PaginationList url={url} setContent={setBookmarksContent}></PaginationList>
            {(bookmarksContent === null) ?
                <p>Loading content...</p> :
                <BookmarksList bookmarkList={bookmarksContent}></BookmarksList>
            }
        </Container>
    );
};

export default BookmarksPage;