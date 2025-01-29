function changeGradeLevel() {
    const grade = document.getElementById('grade-level').value;
    
    document.querySelectorAll('table').forEach(table => table.classList.remove('active'));
    
    if (grade === '11') {
        document.getElementById('grade-11-semester-1').classList.add('active');
        
    } else if (grade === '12') {
        document.getElementById('grade-12-semester-1').classList.add('active');
    }
}

function showSemester(semester) {
    
    const grade = document.getElementById('grade-level').value;
    if (grade === '11') {
        document.getElementById('grade-11-semester-1').classList.remove('active');
        document.getElementById('grade-11-semester-2').classList.remove('active');
    } else if (grade === '12') {
        document.getElementById('grade-12-semester-1').classList.remove('active');
        document.getElementById('grade-12-semester-2').classList.remove('active');
    }

    if (semester === 1) {
        if (grade === '11') {
            document.getElementById('grade-11-semester-1').classList.add('active');
        } else if (grade === '12') {
            document.getElementById('grade-12-semester-1').classList.add('active');
        }
    } else if (semester === 2) {
        if (grade === '11') {
            document.getElementById('grade-11-semester-2').classList.add('active');
        } else if (grade === '12') {
            document.getElementById('grade-12-semester-2').classList.add('active');
        }
    }
}

window.onload = function() {
    changeGradeLevel();
};
