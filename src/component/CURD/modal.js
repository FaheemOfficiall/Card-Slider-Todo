import React from "react";
import { Button, Form, Table } from "react-bootstrap";

export default function Modal({ submit, setFormData, formData }) {

    return (
        <>
            <div className="d-flex justify-content-end m-4 ">
                <button
                    className="btn btn-outline-info"
                    data-bs-target="#login"
                    data-bs-toggle="modal"
                >
                    ADD USER'S
                </button>
            </div>

            {/* modal */}

            <div className="modal fade" id="login">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h2>ADD USER'S</h2>
                            <button className="btn-close" data-bs-dismiss="modal"></button>
                        </div>
                        <div className="modal-body  alert alert-danger">
                            <form onSubmit={submit}>
                                <div className="form-group">
                                    <label>NAME</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="NAME"
                                        value={formData.name}
                                        onChange={(e) => {
                                          setFormData({ ...formData, name: e.target.value });
                                        }}
                                    ></input>
                                </div>
                                <div className="form-group">
                                    <label>AGE </label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        placeholder="AGE"
                                        value={formData.age}
                                        onChange={(e) => {
                                          setFormData({ ...formData, age: e.target.value });
                                        }}
                                    ></input>
                                </div>
                                {/* <div className="form-group">
                                    <label>DESIGNATION</label>
                                    <input
                                        type="text"
                                        className="form-control"

                                        placeholder="DESIGNATION"
                                    ></input>
                                </div>
                                <div className="form-group">
                                    <label>SALARY</label>
                                    <input
                                        type="text"
                                        className="form-control"

                                        placeholder="SALARY"
                                    ></input>
                                </div> */}
                                <button className="btn btn-primary" data-bs-dismiss="modal" type="submit">Submit</button>
                            </form>
                            <div className="modal-footer">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
