function addClassToDb(classSchedule, classTiming, teacherName, sectionName, courseName, batchNumber) {
    return addDoc(collection(db, "Classes"), {
        classSchedule,
        classTiming,
        teacherName,
        sectionName,
        courseName,
        batchNumber,
    });
  }

window.addClass = async function(){ 
    const classSchedule = document.getElementById("class-schedule").value;
    const classTiming = document.getElementById("class-timings").value;
    const teacherName = document.getElementById("teacher-name").value;
    const sectionName = document.getElementById("section-name").value;
    const courseName = document.getElementById("course-name").value;
    const batchNumber = document.getElementById("batch-number").value;

    try{
        await addClassToDb(classSchedule, classTiming, teacherName, sectionName, courseName, batchNumber);
        swal({
            title: "Class Successfully Added!",
            icon: "success",
            timer: 3000
        });
    }catch(e){
        console.log(e.message)
    }
}