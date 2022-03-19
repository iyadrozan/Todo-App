const todo = document.getElementById('todo');

function add() {
  //1.Mengambil Nilai yang Dituliskan Oleh User
  let newText = document.getElementById('new_text');
  //2.Membuat List Baru ke dalam UL
  let newTodo =
    '<li class="list-group-item"> <span id="txt-inpt" class="li-txt">' + newText.value + '</span> <span onclick="toggle()"> <i class="bi bi-check icn-chk"></i>' + '</span>' + '<span> <i class="bi bi-trash icn-dlt"></i> </span>' + '</li>';

  todo.insertAdjacentHTML('afterbegin', newTodo);
  //3.Mengosongkan Fieldnya
  newText.value = '';
}

function toggle() {
  var tg = document.getElementById('txt-inpt');
  tg.classList.toggle('done');
}
// Fitur Yang Ditambahkan
// 1.Menambahkan
// 2.Coret Kalau Sudah selesai
// 3.menghapus
