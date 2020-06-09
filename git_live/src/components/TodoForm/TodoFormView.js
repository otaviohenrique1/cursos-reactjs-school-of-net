import React from 'react';

export default ({ onChange, onSubmit, title, responsible, description, priority }) => {
    return (
        <div className="col">
            <h4>Form Todo</h4>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label htmlFor="title" className="text-muteds"><small>Title</small></label>
                    <input type="text" name="title" onChange={onChange} value={title} id="title" className="form-control"/>
                </div>
                <div className="form-group">
                    <label htmlFor="responsible" className="text-muteds"><small>Responsible</small></label>
                    <select name="responsible" onChange={onChange} value={responsible} id="responsible" className="form-control">
                        <option>Wesley Willian</option>
                        <option>Luiz </option>Carlos
                        <option>Victor Lima</option>
                        <option>Erik Fig</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="description" className="text-muteds"><small>Description</small></label>
                    <textarea name="description" onChange={onChange} value={description} id="description" cols="" rows="" className="form-control"></textarea>
                </div>
                <div className="form-group">
                    <label htmlFor="priority" className="text-muteds"><small>Priority</small></label>
                    <select name="priority" onChange={onChange} value={priority} id="priority" className="form-control">
                        <option>High</option>
                        <option>Medium</option>
                        <option>Low</option>
                    </select>
                </div>
                <div className="form-group">
                    <button className="btn btn-primary">Create</button>
                </div>
            </form>
        </div>
    );
}