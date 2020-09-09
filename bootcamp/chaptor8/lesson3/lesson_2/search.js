const $list = $("#list");
const $inp = $("#inp");

function getTodos(){
  const text = $inp.val();
  const query = new URLSearchParams({
    // _limit: 10,
    // _page: 2
    // _start: 14,
    // _end: 16,
    // _sort: "title",
    // status: false
    // status_ne: true
    // title_ne: "emir"
    q: text
  });
  // query.set("q", text);
  // query.set("_limit", 10);
  // query.set("_page", 2);
  console.log(query.toString());

  fetch("http://localhost:8000/todos/?" + query.toString())
  // fetch("http://localhost:8000/todos/?&_limit=20&_page=2")
    .then(r=>r.json())
    .then(data=>{
      console.log(data)
    })
}

$inp.on("change", getTodos);
