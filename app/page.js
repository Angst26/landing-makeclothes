'use client';

import { useState } from 'react';

const A = 'https://static.tildacdn.com/';

const products = [
  ['tild3532-3331-4466-b431-633436653338/1.webp', 'Футболка оверсайз', 'Кулирная гладь 200 гр/м²'],
  ['tild6436-3964-4263-b231-623166346635/3.webp', 'Футболка стандарт', 'Кулирная гладь 250 гр/м²'],
  ['tild6364-6135-4031-a638-313538666537/5.webp', 'Худи оверсайз', 'Футер 3-х нитка петля 400 гр/м²'],
  ['tild6635-6362-4166-b431-643163396465/4.webp', 'Худи оверсайз укороченное', 'Футер 3-х нитка петля 400 гр/м²'],
  ['tild6330-3638-4033-b630-343432616263/2.webp', 'Зип худи оверсайз', 'Футер 3-х нитка петля 400 гр/м²'],
  ['tild3939-6566-4636-b539-613031396636/16.webp', 'Укороченное зип худи', 'Футер 3-х нитка петля 420 гр/м²'],
  ['tild6161-6336-4462-a134-336562306235/3_3__2.webp', 'Лонгслив стандарт', 'Кулирная гладь'],
  ['tild3730-6363-4565-a462-646462353533/4_1.webp', 'Лонгслив оверсайз', 'Кулирная гладь'],
];

const projects = [
  ['tild3630-6339-4538-b539-323539393464/12_.webp', 'ЮГ404'],
  ['tild3064-3862-4962-b165-333230613236/9.webp', 'UTOPIA SHOW'],
  ['tild3439-3039-4135-b938-653335313264/11.webp', 'CMH'],
  ['tild3139-3132-4365-b436-363466383936/m1s52blxaoex7z13hv8g.webp', 'ANTIHYPE'],
  ['tild3966-3837-4738-a330-323661376336/12.webp', 'HOME'],
];

const faqs = [
  ['Какой минимальный тираж?', 'Минимальный тираж — от 10 шт. Для нестандартных изделий условия рассчитываются индивидуально.'],
  ['Сколько стоит сделать мерч?', 'Единого прайса нет — стоимость зависит от изделий, материалов, тиража, нанесения и упаковки.'],
  ['Какие данные нужны для начала работы?', 'Укажите изделия, тираж, срок, город получения и пожелания. Менеджер уточнит детали.'],
  ['Какой срок производства?', 'Срок производства — от 14 рабочих дней и зависит от сложности и объёма заказа.'],
  ['Условия работы', 'Все детали, сроки и условия фиксируются в договоре. Работаем с ЭДО.'],
  ['Доставка', 'Отправим заказ в любую точку мира транспортной компанией или самовывозом из Санкт-Петербурга.'],
  ['Посещение шоурума', 'Шоурум находится по адресу: Санкт-Петербург, ул. Белы Куна, 32.'],
];

function Marker({ children }) { return <div className="marker"><i />{children}</div>; }

export default function Home() {
  const [openFaq, setOpenFaq] = useState(null);
  const scrollToForm = () => document.querySelector('#form')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <main>
      <header className="header shell">
        <img src={`${A}tild6239-3437-4861-b961-323234383534/logo.svg`} alt="Делаем вещи" />
        <div className="header__contacts"><a href="tel:+79319552557">☎ &nbsp;8 (931) 955-25-57</a><a href="tel:+79214433342">☎ &nbsp;8 (921) 443-33-42</a></div>
        <div className="header__meta"><span>г. Санкт-Петербург, ул. Белы Куна, 32</span><a href="mailto:b2b@makeclothes.ru">b2b@makeclothes.ru</a></div>
        <button className="menu" aria-label="Меню"><span /><span /><span /></button>
      </header>

      <section className="hero shell">
        <div className="hero__copy">
          <small>ШВЕЙНАЯ ФАБРИКА ПОЛНОГО ЦИКЛА</small>
          <img src={`${A}tild6562-3831-4261-b937-383265336636/logo_white.svg`} alt="Делаем вещи" />
          <h1>ПРОИЗВОДСТВО ОДЕЖДЫ ДЛЯ БРЕНДОВ<br />И КОРПОРАТИВНОГО МЕРЧА ПОД КЛЮЧ</h1>
        </div>
        <nav className="hero__nav">
          <a href="#projects">Проекты</a>
          <a href="#assortment">Ассортимент</a>
          <a href="#printing">Нанесение</a>
          <button onClick={scrollToForm}>Заказать продукцию</button>
          <a className="hero__social hero__social--tg" href="https://t.me/makeclothesru" aria-label="Telegram"><img src={`${A}tild6461-3236-4633-a461-656133613338/tg.svg`} alt="" /></a>
          <a className="hero__social hero__social--max" href="https://max.ru/u/f9LHodD0cOIwlNLs0Oo_iS-dlb_sspO9s4iKYTji2yNL-Gte_d0jpdCeHpo" aria-label="Max"><img src={`${A}tild3965-3437-4138-a433-663831356236/max.svg`} alt="" /></a>
        </nav>
      </section>

      <section className="about shell section" id="about">
        <Marker>О НАС</Marker>
        <h2>ПРОИЗВОДСТВО ПОЛНОГО ЦИКЛА<br /><b>С 13-ЛЕТНИМ ОПЫТОМ:</b> <span>ИЗДЕЛИЯ ЛЮБОЙ СЛОЖНОСТИ ДЛЯ КОМПАНИЙ И БРЕНДОВ</span></h2>
        <div className="benefits">
          <article><Marker>МАССОВОЕ ПРОИЗВОДСТВО<br />ДЛЯ ЛЮБОГО БЮДЖЕТА</Marker><p>Производим сувенирную продукцию и фирменную упаковку — бирки, пакеты и вкладыши с вашим лого даже в малых тиражах от 10 единиц</p></article>
          <article><Marker>ДОСТАВКА<br />ПО ВСЕМУ МИРУ</Marker><p>Доставим брендированную продукцию в любую точку мира. Можем разослать заказы персонально вашим клиентам или сотрудникам.</p></article>
          <article><Marker>СОБСТВЕННОЕ<br />ПРОИЗВОДСТВО</Marker><p>Шьём и печатаем в своём цеху — контроль качества на каждом этапе и точные сроки.</p></article>
          <article><Marker>ПРОЕКТЫ<br />ПОД КЛЮЧ</Marker><p>Реализуем концепцию заказчика или разработаем её с нуля под вашу задачу.</p></article>
        </div>
        <div className="model"><img src={`${A}tild3731-6136-4330-a166-623032326333/man.svg`} alt="Модель в изделии производства" /></div>
      </section>

      <section className="showrooms shell section">
        <Marker>ШОУРУМЫ</Marker>
        <h2>ГДЕ ПОСМОТРЕТЬ <b>ОБРАЗЦЫ ВЕЩЕЙ</b></h2>
        <div className="showroom-grid">
          <article><img src={`${A}tild3864-3532-4866-a630-333434393833/MC5A7246-_1.jpg`} alt="Цех в Санкт-Петербурге" /><div><div><b>ЦЕХ «ДЕЛАЕМ ВЕЩИ». СПБ.</b><p>Шоу рум у нас на производстве.<br /><br />Все виды изделий<br />+ возможность посмотреть цех.</p></div><p className="address">г. Санкт-Петербург<br />ул. Белы Куна, 32</p></div></article>
          <article><img src={`${A}tild3461-6635-4761-a333-386236376364/1H1A5930_1.jpg`} alt="Дизайн-завод в Москве" /><div><div><b>ДИЗАЙН-ЗАВОД. МОСКВА.</b><p>Партнерский магазин «VSRAP Shop».<br /><br />Весь ассортимент магазина<br />произведен на наших мощностях.</p></div><p className="address">г. Москва<br />ул. Большая Новодмитровская, 36</p></div></article>
        </div>
      </section>

      <section className="mosaic shell section">
        <div className="mosaic__tile mosaic__photo"><img src={`${A}tild3463-3366-4432-b965-363264363533/photo_2026-02-19_212.jpeg`} alt="Производство" /></div>
        <div className="mosaic__tile mosaic__statement"><b>МЫ САМИ ПРОИЗВОДИМ ВСЕ ИЗДЕЛИЯ СПЕЦИАЛЬНО ПОД ВАС —</b><span>КАЖДЫЙ ЭТАП ОТ РАСКРОЯ ДО УПАКОВКИ ПОД НАШИМ КОНТРОЛЕМ</span></div>
        <div className="mosaic__tile"><img src={`${A}tild3934-3266-4265-b865-393039396565/item.png`} alt="Работа с тканью" /></div>
        <div className="mosaic__tile"><img src={`${A}tild6133-3234-4336-b863-646636633164/item2.png`} alt="Пошив" /></div>
        <div className="mosaic__tile mosaic__catalog"><b>ХУДИ, ФУТБОЛКИ, СВИТШОТЫ, ЛОНГСЛИВЫ, БРЮКИ, РУБАШКИ, БОМБЕРЫ, КУРТКИ,</b><span>СВИТЕРЫ, ДЖЕРСИ И ДРУГИЕ ИЗДЕЛИЯ ПОД ЗАКАЗ</span></div>
        <div className="mosaic__tile"><img src={`${A}tild3866-6631-4336-b139-353837366265/item3.png`} alt="Детали изделия" /></div>
      </section>

      <section className="lead shell section" id="form">
        <h2>ПОЛУЧИТЕ ГОТОВОЕ<br />ПРЕДЛОЖЕНИЕ СПЕЦИАЛЬНО<br />ПОД ВАШ ПРОЕКТ</h2>
        <p><i /> при первом заказе печать бирки на изделии — в подарок</p>
        <form onSubmit={(e) => e.preventDefault()}>
          <label>Имя<input placeholder="Иван" /></label>
          <label>Номер телефона<input placeholder="+7 (000) 000-00-00" /></label>
          <label>Электронная почта<input placeholder="b2b@makeclothes.ru" /></label>
          <button>Оставить заявку</button>
          <small>Нажимая на кнопку, вы даете согласие на обработку персональных данных</small>
        </form>
      </section>

      <section className="assortment shell section" id="assortment">
        <Marker>АССОРТИМЕНТ</Marker>
        <h2>МЫ РАЗРАБАТЫВАЕМ ЛЮБЫЕ МОДЕЛИ ПО ВАШИМ ФОТО И ЭСКИЗАМ, НО <b>МНОГОЕ МЫ РАЗРАБОТАЛИ РАНЕЕ!</b></h2>
        <div className="filters"><button className="active">Все</button><button>Одежда⌄</button><button>Рюкзаки и сумки</button><button>Аксессуары⌄</button><button>Верхняя одежда</button><button>Сувениры⌄</button><button>Полиграфия</button></div>
        <div className="products">{products.map(([src, name, text]) => <article key={name}><img src={A + src} alt={name} /><b>{name}</b><small>{text}</small></article>)}</div>
        <button className="more">Загрузить ещё</button>
      </section>

      <section className="printing shell section" id="printing">
        <div><Marker>НАНЕСЕНИЕ</Marker><h2>ПРОФЕССИОНАЛЬНЫЕ<br />ТЕХНОЛОГИИ<br />НАНЕСЕНИЯ И ДЕКОРА<br /><span>ДЛЯ ЛЮБЫХ ИЗДЕЛИЙ</span></h2></div>
        <div className="print-list">{['ШЕЛКОГРАФИЯ','DTF','ЗАПЕЧАТКА ТКАНИ','АППЛИКАЦИЯ ТКАНИ','СТРАЗЫ','ЭТИКЕТКИ','ВЫШИВКА','ДИСТРЕСС И ОКРАС','ДРУГОЕ'].map(x => <button key={x}>{x}<i>›</i></button>)}</div>
      </section>

      <section className="projects shell section" id="projects">
        <Marker>ПРОЕКТЫ</Marker>
        <h2>ПОСМОТРИ, КАКИЕ ПРОЕКТЫ<br /><b>МЫ УЖЕ ЗАПУСТИЛИ</b></h2>
        <p>Собственное производство, соединяющее современные и традиционные технологии</p>
        <div className="project-grid">{projects.map(([src, name], i) => <article className={`project project--${i + 1}`} key={name}><img src={A + src} alt={name} /><b>{name}</b></article>)}<button className="all">Все проекты</button><div className="project-cta"><span>ХОЧУ ТАКОЙ ЖЕ<br /><b>КАЧЕСТВЕННЫЙ МЕРЧ</b></span><button onClick={scrollToForm}>Получить мерч</button></div></div>
      </section>

      <section className="services shell section" id="services">
        <Marker>УСЛУГИ</Marker>
        <h2>ПОЛНЫЙ ЦИКЛ УСЛУГ ОТ ДИЗАЙНА И УПАКОВКИ <span>ДО ПРОФЕССИОНАЛЬНОГО ПРОДАКШЕНА</span></h2>
        <div className="service-grid">
          <article className="dark"><b>ШВЕЙНЫЙ ЦЕХ</b><p>У нас есть база готовых лекал, а при необходимости разработаем изделие с нуля: подключим конструктора, технолога и дизайнера. Подберём ткань и фурнитуру, сошьём аккуратно и надёжно.</p></article>
          <article><b>ДИЗАЙН</b><p>Наши дизайнеры могут разработать под ключ дизайн всей коллекции или отдельных вещей, подготовить макеты к производству.</p></article>
          <article><b>ПРОИЗВОДСТВО СУВЕНИРНЫХ ИЗДЕЛИЙ</b><p>Если помимо пошивных вещей вам нужны сувениры, мы реализуем вашу идею с нуля.</p></article>
          <article className="dark"><b>ПЕЧАТНОЕ ПРОИЗВОДСТВО</b><p>Сделаем нанесение любого типа и сложности. Перед партией мы делаем образец нанесения.</p></article>
          <article className="dark"><b>УПАКОВКА И ДОСТАВКА</b><p>Бережно упаковываем изделия, делаем брендированные коробки и доставляем по всему миру.</p></article>
          <article><b>ПРОДАКШЕН</b><p>Для вашей коллекции мы можем провести съёмку и предложить идеи и варианты стилизации.</p></article>
        </div>
      </section>

      <section className="faq shell section">
        <h2>ОТВЕТЫ НА ЧАСТО<br />ЗАДАВАЕМЫЕ ВОПРОСЫ</h2>
        <div>{faqs.map(([q,a],i) => <article key={q} className={openFaq === i ? 'open' : ''}><button onClick={() => setOpenFaq(openFaq === i ? null : i)}><b>{q}</b><span>{openFaq === i ? '−' : '+'}</span></button><p>{a}</p></article>)}</div>
      </section>

      <footer className="footer shell">
        <img src={`${A}tild6562-3831-4261-b937-383265336636/logo_white.svg`} alt="Делаем вещи" />
        <div className="footer__contacts"><a href="mailto:b2b@makeclothes.ru">✉ b2b@makeclothes.ru</a><a href="tel:+79319552557">☎ 8 (931) 955-25-57</a><a href="tel:+79214433342">☎ 8 (921) 443-33-42</a></div>
        <button onClick={scrollToForm}>Заказать мерч</button>
        <hr /><small>© 2026 ООО «Делаем Вещи» &nbsp; ОГРН 1217800183150<br />г. Санкт-Петербург, ул. Белы Куна, 32</small>
      </footer>
      <button className="sticky" onClick={scrollToForm}>Заказать мерч</button>
    </main>
  );
}
