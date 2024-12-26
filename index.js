const mahasiswaNim = '20230040150';
const updateData = {
    nama: 'Pratama Rijal',
    gender: 'L',
    prodi: 'TE',
    alamat: 'Jl. Babakan Assalafiah 1'
};

fetch(`http://localhost:3000/mahasiswa/${mahasiswaNim}`, {
    method: 'PUT',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(updateData)
})
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));