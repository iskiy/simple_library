import { Button, ButtonGroup } from 'react-bootstrap';
function BookRow({ book, isAdmin, onDelete, onUpdate }) {
    const { title, author, year, publisher,  isbn, _id } = book;

    return (
        <tr>
            <td>{title}</td>
            <td>{author}</td>
            <td>{year}</td>
            <td>{publisher}</td>
            <td>{isbn}</td>
            {isAdmin && (
                <td>
                    <ButtonGroup>
                        <Button variant="warning" onClick={() => onUpdate(book)}>
                            Update
                        </Button>
                        <Button variant="danger" onClick={() => onDelete(book)}>
                            Delete
                        </Button>
                    </ButtonGroup>
                </td>
            )}
        </tr>


    );
}
export default BookRow;

