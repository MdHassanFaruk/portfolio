    var year = 2023, month = 4-1, day = 6;

    // Get the current count from local storage or set to 0 if it doesn't exist
    let i_count = localStorage.getItem("i_count") || 0;
    let cv_count = localStorage.getItem("cv_count") || 0;
    let t_count = localStorage.getItem("t_count") || 0;
    // Increment the count by 1
    i_count++;
    cv_count++;
    t_count++;
    // Update the count in local storage
    localStorage.setItem("i_count", i_count);
    localStorage.setItem("cv_count", cv_count);
    localStorage.setItem("i_count", t_count);
    // document.getElementById("counter").innerHTML = count;
  