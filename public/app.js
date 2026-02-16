const tg = window.Telegram.WebApp;
tg.expand();

const API = "/api";

async function createDeal(){
  const r = await fetch(API + "/createDeal", {
    method:"POST",
    headers:{ "Content-Type":"application/json" },
    body: JSON.stringify({ user: tg.initDataUnsafe.user.id })
  });
  const d = await r.json();
  localStorage.setItem("deal", d.id);
  location.href="deal.html";
}

async function joinDeal(){
  const id = prompt("Введите ID сделки");
  await fetch(API + "/joinDeal", {
    method:"POST",
    headers:{ "Content-Type":"application/json" },
    body: JSON.stringify({
      id,
      user: tg.initDataUnsafe.user.id
    })
  });
  localStorage.setItem("deal", id);
  location.href="deal.html";
}

async function loadDeal(){
  const id = localStorage.getItem("deal");
  if(!id) return;

  const r = await fetch(API + "/getDeal?id=" + id);
  const d = await r.json();

  dealId.innerText = id;
  seller.innerText = d.seller || "-";
  buyer.innerText = d.buyer || "-";
  status.innerText = d.status;
}

async function confirm(){
  const id = localStorage.getItem("deal");
  await fetch(API + "/confirm", {
    method:"POST",
    headers:{ "Content-Type":"application/json" },
    body: JSON.stringify({ id })
  });
  loadDeal();
}

async function dispute(){
  const id = localStorage.getItem("deal");
  await fetch(API + "/dispute", {
    method:"POST",
    headers:{ "Content-Type":"application/json" },
    body: JSON.stringify({ id })
  });
  loadDeal();
}

loadDeal();