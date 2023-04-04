import { useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';

function UpdateBookModal({  show, onHide, onSubmit, book }) {
    const [title, setTitle] = useState(book.title);
    const [author, setAuthor] = useState(book.author);
    const [year, setYear] = useState(book.year);
    const [publisher, setPublisher] = useState(book.publisher);
    const [isbn, setIsbn] = useState(book.isbn);
    const [_id, setID] = useState(book._id);

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit({ title, author, year, publisher, isbn,  _id });
    };

    return (
        <>
            <Modal show={show} onHide={onHide}>
                <Modal.Header closeButton>
                    <Modal.Title>Update Book</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="formBasicTitle">
                            <Form.Label>Title</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter title"
                                value={title}
                                onChange={(event) => setTitle(event.target.value)}
                            />
                        </Form.Group>

                        <Form.Group controlId="formBasicAuthor">
                            <Form.Label>Author</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter author"
                                value={author}
                                onChange={(event) => setAuthor(event.target.value)}
                            />
                        </Form.Group>

                        <Form.Group controlId="formBasicYear">
                            <Form.Label>Year</Form.Label>
                            <Form.Control
                                type="number"
                                placeholder="Enter year"
                                value={year}
                                onChange={(event) => setYear(event.target.value)}
                            />
                        </Form.Group>

                        <Form.Group controlId="formBasicPublisher">
                            <Form.Label>Publisher</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter publisher"
                                value={publisher}
                                onChange={(event) => setPublisher(event.target.value)}
                            />
                        </Form.Group>

                        <Form.Group controlId="formBasicIsbn">
                            <Form.Label>ISBN</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter ISBN"
                                value={isbn}
                                onChange={(event) => setIsbn(event.target.value)}
                            />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Save Changes
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default UpdateBookModal;