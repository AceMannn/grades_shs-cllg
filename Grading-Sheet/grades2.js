function changeCollegeLevel() {
    const level = document.getElementById('college-level').value;
    
    document.querySelectorAll('.semester-table').forEach(table => table.classList.remove('active'));

    if (level === 'college') {
        document.getElementById('semester-1').classList.add('active');
        document.getElementById('semester-2').classList.add('active');
    }
}

function showSemester(semester) {
    
    document.querySelectorAll('.semester-table').forEach(table => table.classList.remove('active'));

    document.getElementById(`semester-${semester}`).classList.add('active');
}

window.onload = function() {
    changeCollegeLevel();
};
