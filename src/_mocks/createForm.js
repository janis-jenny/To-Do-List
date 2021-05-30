const createHtmlForm = () => {
  document.body.innerHTML = `<div class="add-btns">
    <button type="button" class="btn  btn-secondary btn-sm px-3 m-1 rounded-pill" data-toggle="modal" data-target="#exampleModal">Add Task</button>
    <button type="button" class="btn  btn-secondary btn-sm px-3 m-1 rounded-pill" data-toggle="modal" data-target="#projectModal">Add Project</button>
  </div>
  <div id="projectModal" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <form action="/project" class="modal-dialog project-form" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h4 id="exampleModalLabel" class="modal-title">Add a new project</h4>
            <button type="button" data-dismiss="modal" id="cancel-btn" class="btn btn-secondary btn-sm cancel-btn" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body d-flex justify-content-center">
            <input type="text" aria-describedby="project" placeholder="Put a name for the project" class="project_name p-1">
          </div>
          <div class="modal-footer d-flex justify-content-center">
            <button type="button" class="btn btn-secondary btn-sm px-3 m-1 rounded-pill" id="new-project">Add Project</button>
            <button type="button" class="btn btn-secondary btn-sm px-3 m-1 rounded-pill" data-dismiss="modal" aria-label="Close">Cancel</button>
          </div>
        </div>
      </form>
      
    </div>
    <div id="exampleModal" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true" >
      <form class="modal-dialog " role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h4 id="exampleModalLabel" class="modal-title">Create a Task
            </h4>
            <button type="button" class="btn btn-secondary btn-sm cancel-btn" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
        
          <div class="modal-body form-section">
            <label for="project">Select a project</label>
            <select id="project-list" name="project">
              <option value="default" id="default"></option>
            </select>
          
            <div class="form-section">
              <label for="title">Title</label>
              <input type="text" name="title" id="title">
            </div>
          
            <div class="form-section">
              <label for="description">Description</label>
              <textarea name="description" id="description"></textarea>
            </div>
        
            <div class="form-section">
              <label for="date">Date</label>
              <input type="date" name="date" id="date">
            </div>
            <div class="form-section">
              <label for="priority">Priority</label>
              <select id="priority-list" name="priority">
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
              </select>
            </div>
          </div>
          <div class="modal-footer d-flex justify-content-center">
            <button type="button" id="create-button" class="create-button btn btn-secondary btn-sm px-3 m-1 rounded-pill">Create</button>
            <button type="button" class="btn btn-secondary btn-sm px-3 m-1 rounded-pill" data-dismiss="modal" aria-label="Close">Cancel</button>
          </div>
        </div>
      </form>
    </div>`;
};

export default createHtmlForm;