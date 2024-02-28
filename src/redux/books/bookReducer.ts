import { CHANGE_SORT_BY } from './bookTypes';

const initialState = {
    sortBy: 'id',
    data: [
        {
        'title': 'Harry Potter',
        'id': 'ID1',
        'author': 'J.K. Rowling',
        },
        {
        'title': 'Harry Potter 2',
        'id': 'ID2',
        'author': 'J.K. Rowling',
        },
        {
        'title': 'Harry Potter 3',
        'id': 'ID3',
        'author': 'J.K. Rowling',
        },
        {
        'title': 'Harry Potter 4',
        'id': 'ID4',
        'author': 'J.K. Rowling',
        },
        {
        'title': 'Harry Potter 5',
        'id': 'ID5',
        'author': 'J.K. Rowling',
        },
        {
        'title': 'Harry Potter 6',
        'id': 'ID6',
        'author': 'J.K. Rowling',
        },
        {
        'title': 'Harry Potter 7.1',
        'id': 'ID7',
        'author': 'J.K. Rowling',
        },
        {
        'title': 'Harry Potter 7.2',
        'id': 'ID8',
        'author': 'J.K. Rowling',
        },
        {
        'title': 'The Hobbit',
        'id': 'ID72',
        'author': 'J.R.R. Tolkien',
        },
        {
        'title': 'The Chronicles of Narnia',
        'id': 'ID84',
        'author': 'C.S. Lewis',
        },
        {
        'title': 'Moby-Dick',
        'id': 'ID96',
        'author': 'Herman Melville',
        },
        {
        'title': 'The Picture of Dorian Gray',
        'id': 'ID108',
        'author': 'Oscar Wilde',
        },
        {
        'title': 'Jane Eyre',
        'id': 'ID120',
        'author': 'Charlotte Brontë',
        },
        {
        'title': 'Dracula',
        'id': 'ID132',
        'author': 'Bram Stoker',
        },
        {
        'title': 'War and Peace',
        'id': 'ID144',
        'author': 'Leo Tolstoy',
        },
        {
        'title': 'The Adventures of Tom Sawyer',
        'id': 'ID156',
        'author': 'Mark Twain',
        },
        {
        'title': 'Frankenstein',
        'id': 'ID168',
        'author': 'Mary Shelley',
        },
        {
        'title': 'The Count of Monte Cristo',
        'id': 'ID180',
        'author': 'Alexandre Dumas',
        },
        {
        'title': 'Les Misérables',
        'id': 'ID192',
        'author': 'Victor Hugo',
        },
        {
        'title': 'Anna Karenina',
        'id': 'ID204',
        'author': 'Leo Tolstoy',
        },
        {
        'title': 'The Brothers Karamazov',
        'id': 'ID216',
        'author': 'Fyodor Dostoevsky',
        },
        {
        'title': 'The Odyssey',
        'id': 'ID228',
        'author': 'Homer',
        },
        {
        'title': 'Crime and Punishment',
        'id': 'ID240',
        'author': 'Fyodor Dostoevsky',
        },
        {
        'title': 'Gone with the Wind',
        'id': 'ID252',
        'author': 'Margaret Mitchell',
        },
        {
        'title': 'The Jungle Book',
        'id': 'ID264',
        'author': 'Rudyard Kipling',
        },
        {
        'title': 'The Call of the Wild',
        'id': 'ID276',
        'author': 'Jack London',
        },
        {
        'title': 'Wuthering Heights',
        'id': 'ID288',
        'author': 'Emily Brontë',
        },
        {
        'title': 'The Canterbury Tales',
        'id': 'ID300',
        'author': 'Geoffrey Chaucer',
        },
    ],
};

const bookReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case CHANGE_SORT_BY: return {
            ...state,
            sortBy: action.payload,
        };
        default: return state;
    }
};

export default bookReducer;
