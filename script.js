const todo = document.getElementById('todo');

function add() {
  //1.Mengambil Nilai yang Dituliskan Oleh User
  let newText = document.getElementById('new_text');
  //2.Membuat List Baru ke dalam UL
  let newTodo = '<li class="list-group-item"> <span onclick="toggle(this)" class="txt">' + newText.value + '</span>' + "<span onclick='removeBtn(this)'> <i class='bi bi-x-square-fill icn-dlt'></i></span>";
  todo.insertAdjacentHTML('afterbegin', newTodo);
  //3.Mengosongkan Fieldnya
  newText.value = '';
}

function toggle(el) {
  el.classList.toggle('done');
}

function removeBtn(el) {
  el.parentElement.remove();
}
// Fitur Yang Ditambahkan
// 1.Menambahkan
// 2.Coret Kalau Sudah selesai
// 3.menghapus
