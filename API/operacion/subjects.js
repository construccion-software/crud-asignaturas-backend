const subjects = [
  {
    code: "MATH-101",
    name: "Mathematics",
    description: "Mathematics",
    credits: 3,
    created_at: new Date(),
    updated_at: new Date(),
    teacher: "John Doe",
  },
  {
    code: "PHYS-101",
    name: "Physics",
    description: "Physics",
    credits: 4,
    created_at: new Date(),
    updated_at: new Date(),
    teacher: "Jane Doe",
  },
  {
    code: "CHEM-101",
    name: "Chemistry",
    description: "Chemistry",
    credits: 4,
    created_at: new Date(),
    updated_at: new Date(),
    teacher: "John Doe",
  },
];

function getSubjects(res) {
  res.status(200).json(subjects)
}

async function insertSubject(request, res) {
  const newSubject = await request.json();
  if (subjects.find((subject) => subject.code === newSubject.code)) {
    res.status(400).json({error: "Subject already exists"})
  }
}

async function deleteSubject(request, res) {
  const { code } = await request.json();
  const index = subjects.findIndex((subject) => subject.code === code);
  if (index !== -1) {
    const deletedSubject = subjects.splice(index, 1)[0];
    res.status(200).json(deletedSubject)
  } else {
    res.status(400).json({error: "Subject not found"});
  }
}

module.exports = {getSubjects, insertSubject, deleteSubject}