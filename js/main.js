


// JavaScript to show pop-up on click
function showPopup(popupId) {
    const popup = document.querySelector(`.${popupId}`);
    popup.style.display = 'block';
}

// JavaScript to hide pop-up on click of close button
function hidePopup(popupId) {
    const popup = document.querySelector(`.${popupId}`);
    popup.style.display = 'none';
}

// JavaScript to handle click on boxes and apply the "clicked" class
const boxes = document.querySelectorAll('.box');
boxes.forEach(box => {
    box.addEventListener('click', () => {
        // Remove the "clicked" class from all boxes
        boxes.forEach(otherBox => otherBox.classList.remove('clicked'));
        // Add the "clicked" class to the clicked box
        box.classList.add('clicked');
    });
});



        document.getElementById('accountType').addEventListener('change', function () {
            var accountType = this.value;
            var streamModuleDiv = document.getElementById('streamModuleDiv');
            var statusDiv = document.getElementById('statusDiv');

            if (accountType === 'Consultant') {
                streamModuleDiv.style.display = 'block';
                statusDiv.style.display = 'block';
            } else {
                streamModuleDiv.style.display = 'none';
                statusDiv.style.display = 'none';
            }
        });


        // createbatch.html
        // Function to add more module containers
        function addModuleContainer() {
            const moduleContainer = document.createElement('div');
            moduleContainer.classList.add('module-container');

            const moduleRow = document.createElement('div');
            moduleRow.classList.add('row');

            const colLeft = document.createElement('div');
            colLeft.classList.add('col-md-6');

            const colRight = document.createElement('div');
            colRight.classList.add('col-md-6');

            const formGroupStartDate = document.createElement('div');
            formGroupStartDate.classList.add('form-group');

            const labelStartDate = document.createElement('label');
            labelStartDate.textContent = 'Start Date';

            const inputStartDate = document.createElement('input');
            inputStartDate.setAttribute('type', 'date');
            inputStartDate.setAttribute('name', 'moduleStartDate');
            inputStartDate.classList.add('form-control');
            inputStartDate.required = true;

            formGroupStartDate.appendChild(labelStartDate);
            formGroupStartDate.appendChild(inputStartDate);
            colLeft.appendChild(formGroupStartDate);

            const formGroupEndDate = document.createElement('div');
            formGroupEndDate.classList.add('form-group');

            const labelEndDate = document.createElement('label');
            labelEndDate.textContent = 'End Date';

            const inputEndDate = document.createElement('input');
            inputEndDate.setAttribute('type', 'date');
            inputEndDate.setAttribute('name', 'moduleEndDate');
            inputEndDate.classList.add('form-control');
            inputEndDate.required = true;

            formGroupEndDate.appendChild(labelEndDate);
            formGroupEndDate.appendChild(inputEndDate);
            colRight.appendChild(formGroupEndDate);

            moduleRow.appendChild(colLeft);
            moduleRow.appendChild(colRight);
            moduleContainer.appendChild(moduleRow);

            const formGroupTrainer = document.createElement('div');
            formGroupTrainer.classList.add('form-group');

            const labelTrainer = document.createElement('label');
            labelTrainer.textContent = 'Trainer';

            const selectTrainer = document.createElement('select');
            selectTrainer.setAttribute('name', 'trainer');
            selectTrainer.classList.add('form-control', 'col-md-6');
            selectTrainer.required = true;

            const optionTrainer = document.createElement('option');
            optionTrainer.textContent = 'Krish';
            selectTrainer.appendChild(optionTrainer);

            formGroupTrainer.appendChild(labelTrainer);
            formGroupTrainer.appendChild(selectTrainer);
            moduleContainer.appendChild(formGroupTrainer);

            const formGroupCourse = document.createElement('div');
            formGroupCourse.classList.add('form-group');

            const labelCourse = document.createElement('label');
            labelCourse.textContent = 'Course';

            const selectCourse = document.createElement('select');
            selectCourse.setAttribute('name', 'course');
            selectCourse.classList.add('form-control', 'col-md-6');
            selectCourse.required = true;

            const optionCourse = document.createElement('option');
            optionCourse.textContent = 'Java';
            selectCourse.appendChild(optionCourse);

            formGroupCourse.appendChild(labelCourse);
            formGroupCourse.appendChild(selectCourse);
            moduleContainer.appendChild(formGroupCourse);

            document.querySelector('#invisible').appendChild(moduleContainer);
        }




        // Function to handle form submission and create batch
        function createBatch() {
            const form = document.getElementById('batchForm');
            if (form.checkValidity()) {
                // Add your logic for creating the batch here...
                form.submit(); // Submit the form if all fields are valid
            } else {
                form.classList.add('was-validated');
            }
        }
        // createbatch.html completed



        // handling buttons in the first container of user profile

            // Handle View CV button click
    document.getElementById('viewCVBtn').addEventListener('click', () => {
        // Replace 'cv_file_path.pdf' with the actual path of your CV file
        const cvFilePath = 'cv_file_path.pdf';
        window.location.href = cvFilePath;
      });
  
      // Handle Upload CV button click
    //   document.getElementById('cvFileInput').addEventListener('change', (event) => {
    //     const file = event.target.files[0];
    //     if (file) {
    //       // Perform any further actions with the selected file if needed
    //       console.log('File selected:', file.name);
    //     }
    //   });
  
      // Handle Submit button click
      document.getElementById('submitBtn').addEventListener('click', () => {
        // Implement your logic to submit the uploaded files here
        console.log('Submit button clicked');
      });

      document.getElementById("cvFileInput").addEventListener("change", function() {
        var selectedFile = this.files[0];
        if (selectedFile) {
          document.getElementById("selectedFile").value = selectedFile.name;
        } else {
          document.getElementById("selectedFile").value = "";
        }
      });