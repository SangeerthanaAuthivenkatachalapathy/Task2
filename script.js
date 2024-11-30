document.getElementById('save-btn').addEventListener('click', function () {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
  
    if (!name || !email) {
      showFeedback('Please fill out all required fields.', 'error');
      return;
    }
  
    showFeedback('Candidate saved successfully!', 'success');
  });
  
  document.getElementById('import-all-btn').addEventListener('click', function () {
    const selected = document.querySelectorAll('.candidate-list input:checked');
    if (selected.length === 0) {
      showFeedback('No candidates selected for import.', 'error');
      return;
    }
  
    showFeedback(`${selected.length} candidates imported successfully!`, 'success');
  });
  
  function showFeedback(message, type) {
    const feedback = document.getElementById('feedback');
    feedback.textContent = message;
    feedback.style.color = type === 'success' ? 'green' : 'red';
  }

  document.getElementById('fetch-btn').addEventListener('click', function () {
    // Mockup data fetched from LinkedIn
    const mockData = {
      name: "John Doe",
      email: "johndoe@example.com",
      jobTitle: "Software Engineer",
      company: "Tech Corp",
    };
  
    // Populate fields with mock data
    document.getElementById('name').value = mockData.name;
    document.getElementById('email').value = mockData.email;
    document.getElementById('job-title').value = mockData.jobTitle;
    document.getElementById('company').value = mockData.company;
  
    showFeedback('Data fetched successfully!', 'success');
  });
  //Dark mode
  document.getElementById('theme-switch').addEventListener('change', function () {
    document.body.classList.toggle('dark-mode', this.checked);
  });

   
  
  
  
  