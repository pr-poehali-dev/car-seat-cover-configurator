import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';

const HERO_IMG = 'https://cdn.poehali.dev/projects/178c948b-040e-4cc7-ad35-99592fb0b625/bucket/bf6a5253-33aa-40a8-9c4a-547bd6fafeb2.jpg';
const MAT_IMG = 'https://cdn.poehali.dev/projects/178c948b-040e-4cc7-ad35-99592fb0b625/files/2ed7ac17-b7ef-4950-8fb3-e06b349e17f5.jpg';

type CarModel = { name: string; trims: string[] };
type CarBrand = { brand: string; models: CarModel[] };

const CARS: CarBrand[] = [
  { brand: 'AUDI', models: [
    { name: 'A1, 1 пок. 3-дв. хэтчбэк, 2010-2014, левый руль', trims: ['1+1, 2-й ряд 40/60 без подлокотника, диван цельный'] },
    { name: 'A3', trims: ['Стандарт'] },
    { name: 'A4', trims: ['Стандарт'] },
    { name: 'A6', trims: ['Стандарт'] },
    { name: 'Q3', trims: ['Стандарт'] },
    { name: 'Q5', trims: ['Стандарт'] },
    { name: 'Q7', trims: ['Стандарт'] },
  ]},
  { brand: 'BMW', models: [
    { name: 'X1, 2 пок. 2015-2022, левый руль', trims: ['Стандарт'] },
    { name: '3 Series', trims: ['Стандарт'] },
    { name: '5 Series', trims: ['Стандарт'] },
    { name: '7 Series', trims: ['Стандарт'] },
    { name: 'X3', trims: ['Стандарт'] },
    { name: 'X5', trims: ['Стандарт'] },
    { name: 'X6', trims: ['Стандарт'] },
  ]},
  { brand: 'Changan', models: [
    { name: 'CS35 Plus', trims: ['Стандарт'] },
    { name: 'CS55 Plus', trims: ['Стандарт'] },
    { name: 'CS75 Plus', trims: ['Стандарт'] },
    { name: 'Alsvin', trims: ['Стандарт'] },
    { name: 'UNI-T', trims: ['Стандарт'] },
  ]},
  { brand: 'Chery', models: [
    { name: 'Tiggo 4 Pro', trims: ['Стандарт'] },
    { name: 'Tiggo 7 Pro', trims: ['Стандарт'] },
    { name: 'Tiggo 8 Pro', trims: ['Стандарт'] },
    { name: 'Arrizo 8', trims: ['Стандарт'] },
  ]},
  { brand: 'Chevrolet', models: [
    { name: 'Cruze', trims: ['Стандарт'] },
    { name: 'Captiva', trims: ['Стандарт'] },
    { name: 'Aveo', trims: ['Стандарт'] },
    { name: 'Spark', trims: ['Стандарт'] },
    { name: 'Equinox', trims: ['Стандарт'] },
  ]},
  { brand: 'Daewoo', models: [
    { name: 'Nexia', trims: ['Стандарт'] },
    { name: 'Matiz', trims: ['Стандарт'] },
    { name: 'Lanos', trims: ['Стандарт'] },
    { name: 'Gentra', trims: ['Стандарт'] },
  ]},
  { brand: 'Daihatsu', models: [
    { name: 'Terios', trims: ['Стандарт'] },
    { name: 'Rocky', trims: ['Стандарт'] },
    { name: 'Sirion', trims: ['Стандарт'] },
    { name: 'Cuore', trims: ['Стандарт'] },
  ]},
  { brand: 'Ford', models: [
    { name: 'Focus', trims: ['Стандарт'] },
    { name: 'Mondeo', trims: ['Стандарт'] },
    { name: 'Explorer', trims: ['Стандарт'] },
    { name: 'Kuga', trims: ['Стандарт'] },
    { name: 'EcoSport', trims: ['Стандарт'] },
  ]},
  { brand: 'Honda', models: [
    { name: 'Civic', trims: ['Стандарт'] },
    { name: 'Accord', trims: ['Стандарт'] },
    { name: 'CR-V', trims: ['Стандарт'] },
    { name: 'HR-V', trims: ['Стандарт'] },
    { name: 'Pilot', trims: ['Стандарт'] },
  ]},
  { brand: 'Hyundai', models: [
    { name: 'Solaris', trims: ['Стандарт'] },
    { name: 'Creta', trims: ['Стандарт'] },
    { name: 'Tucson', trims: ['Стандарт'] },
    { name: 'Santa Fe', trims: ['Стандарт'] },
    { name: 'Elantra', trims: ['Стандарт'] },
    { name: 'ix35', trims: ['Стандарт'] },
  ]},
  { brand: 'Kia', models: [
    { name: 'Rio', trims: ['Стандарт'] },
    { name: 'Sportage', trims: ['Стандарт'] },
    { name: 'Sorento', trims: ['Стандарт'] },
    { name: 'Optima', trims: ['Стандарт'] },
    { name: 'K5', trims: ['Стандарт'] },
    { name: 'Cerato', trims: ['Стандарт'] },
  ]},
  { brand: 'Lada', models: [
    { name: 'Vesta', trims: ['Стандарт'] },
    { name: 'Granta', trims: ['Стандарт'] },
    { name: 'Largus', trims: ['Стандарт'] },
    { name: 'Niva Travel', trims: ['Стандарт'] },
    { name: 'XRAY', trims: ['Стандарт'] },
  ]},
  { brand: 'Lexus', models: [
    { name: 'RX', trims: ['Стандарт'] },
    { name: 'NX', trims: ['Стандарт'] },
    { name: 'ES', trims: ['Стандарт'] },
    { name: 'GX', trims: ['Стандарт'] },
    { name: 'LX', trims: ['Стандарт'] },
    { name: 'IS', trims: ['Стандарт'] },
  ]},
  { brand: 'Mazda', models: [
    { name: 'Mazda 3', trims: ['Стандарт'] },
    { name: 'Mazda 6', trims: ['Стандарт'] },
    { name: 'CX-5', trims: ['Стандарт'] },
    { name: 'CX-9', trims: ['Стандарт'] },
    { name: 'CX-30', trims: ['Стандарт'] },
  ]},
  { brand: 'Mercedes-Benz', models: [
    { name: 'C-Class', trims: ['Стандарт'] },
    { name: 'E-Class', trims: ['Стандарт'] },
    { name: 'S-Class', trims: ['Стандарт'] },
    { name: 'GLC', trims: ['Стандарт'] },
    { name: 'GLE', trims: ['Стандарт'] },
    { name: 'GLS', trims: ['Стандарт'] },
  ]},
  { brand: 'Mitsubishi', models: [
    { name: 'Outlander', trims: ['Стандарт'] },
    { name: 'Pajero Sport', trims: ['Стандарт'] },
    { name: 'ASX', trims: ['Стандарт'] },
    { name: 'Eclipse Cross', trims: ['Стандарт'] },
    { name: 'L200', trims: ['Стандарт'] },
  ]},
  { brand: 'Nissan', models: [
    { name: 'Qashqai', trims: ['Стандарт'] },
    { name: 'X-Trail', trims: ['Стандарт'] },
    { name: 'Murano', trims: ['Стандарт'] },
    { name: 'Patrol', trims: ['Стандарт'] },
    { name: 'Almera', trims: ['Стандарт'] },
    { name: 'Teana', trims: ['Стандарт'] },
  ]},
  { brand: 'Opel', models: [
    { name: 'Astra', trims: ['Стандарт'] },
    { name: 'Insignia', trims: ['Стандарт'] },
    { name: 'Mokka', trims: ['Стандарт'] },
    { name: 'Zafira', trims: ['Стандарт'] },
    { name: 'Corsa', trims: ['Стандарт'] },
  ]},
  { brand: 'Renault', models: [
    { name: 'Logan', trims: ['Стандарт'] },
    { name: 'Sandero', trims: ['Стандарт'] },
    { name: 'Duster', trims: ['Стандарт'] },
    { name: 'Kaptur', trims: ['Стандарт'] },
    { name: 'Arkana', trims: ['Стандарт'] },
  ]},
  { brand: 'Subaru', models: [
    { name: 'Outback', trims: ['Стандарт'] },
    { name: 'Forester', trims: ['Стандарт'] },
    { name: 'XV', trims: ['Стандарт'] },
    { name: 'Impreza', trims: ['Стандарт'] },
    { name: 'Legacy', trims: ['Стандарт'] },
  ]},
  { brand: 'Suzuki', models: [
    { name: 'Vitara', trims: ['Стандарт'] },
    { name: 'Grand Vitara', trims: ['Стандарт'] },
    { name: 'Swift', trims: ['Стандарт'] },
    { name: 'Jimny', trims: ['Стандарт'] },
    { name: 'SX4', trims: ['Стандарт'] },
  ]},
  { brand: 'Toyota', models: [
    { name: 'Camry', trims: ['Стандарт'] },
    { name: 'Corolla', trims: ['Стандарт'] },
    { name: 'RAV4', trims: ['Стандарт'] },
    { name: 'Land Cruiser', trims: ['Стандарт'] },
    { name: 'Fortuner', trims: ['Стандарт'] },
    { name: 'Hilux', trims: ['Стандарт'] },
  ]},
  { brand: 'Volkswagen', models: [
    { name: 'Polo', trims: ['Стандарт'] },
    { name: 'Jetta', trims: ['Стандарт'] },
    { name: 'Passat', trims: ['Стандарт'] },
    { name: 'Tiguan', trims: ['Стандарт'] },
    { name: 'Touareg', trims: ['Стандарт'] },
    { name: 'Golf', trims: ['Стандарт'] },
  ]},
  { brand: 'Volvo', models: [
    { name: 'XC60', trims: ['Стандарт'] },
    { name: 'XC90', trims: ['Стандарт'] },
    { name: 'S60', trims: ['Стандарт'] },
    { name: 'S90', trims: ['Стандарт'] },
    { name: 'V60', trims: ['Стандарт'] },
  ]},
];

const COLORS = [
  { name: 'Графит', hex: '#2b2b2f' },
  { name: 'Оранж', hex: '#f15a24' },
  { name: 'Лайм', hex: '#9acd32' },
  { name: 'Бордо', hex: '#7a1f2b' },
  { name: 'Беж', hex: '#cbb89d' },
  { name: 'Индиго', hex: '#3a4a8a' },
];

const MATERIALS = [
  { name: 'Экокожа', desc: 'Износостойкая, легко чистится', price: 12900 },
  { name: 'Алькантара', desc: 'Премиум, тёплая на ощупь', price: 18900 },
  { name: 'Ромб + перфо', desc: 'Спортивный стиль', price: 21900 },
];

const GALLERY = [
  { title: 'Mazda CX-5 — Дизайн "Под перетяжку"', tag: 'Экокожа' },
  { title: 'Creta — Беж/Графит', tag: 'Алькантара' },
  { title: 'Vesta SW — Оранж', tag: 'Перфорация' },
  { title: 'RAV4 — Индиго', tag: 'Ромб' },
];

const REVIEWS = [
  { name: 'Алексей М.', car: 'Kia Sportage', text: 'Сели как родные! Швы ровные, материал плотный. Цех знает дело.', stars: 5 },
  { name: 'Марина К.', car: 'Hyundai Solaris', text: 'Подобрала цвет в конструкторе — пришло точь-в-точь. Очень довольна!', stars: 5 },
  { name: 'Денис В.', car: 'Toyota Camry', text: 'Заказывал ромб с перфорацией. Качество на уровне дилерского салона.', stars: 5 },
];

const NAV = [
  { id: 'hero', label: 'Главная' },
  { id: 'constructor', label: 'Конструктор' },
  { id: 'gallery', label: 'Галерея' },
  { id: 'about', label: 'О нас' },
  { id: 'reviews', label: 'Отзывы' },
  { id: 'contacts', label: 'Контакты' },
];

const Index = () => {
  const [brand, setBrand] = useState<CarBrand>(CARS[0]);
  const [model, setModel] = useState<CarModel>(CARS[0].models[0]);
  const [trim, setTrim] = useState(CARS[0].models[0].trims[0]);
  const [color, setColor] = useState(COLORS[1]);
  const [material, setMaterial] = useState(MATERIALS[0]);
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* NAV */}
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl bg-background/70 border-b border-border">
        <div className="container flex items-center justify-between h-16">
          <button onClick={() => scrollTo('hero')} className="flex items-center gap-3 font-display tracking-wide">
            <img src="https://cdn.poehali.dev/projects/178c948b-040e-4cc7-ad35-99592fb0b625/bucket/e294517c-d19e-4a37-8616-b92c8c8a6905.png" alt="Авточехол 03" className="h-10 w-10 object-contain" />
            <span className="text-xl font-700"><span className="text-primary">Авточехол</span><span className="text-accent"> 03</span></span>
          </button>
          <nav className="hidden md:flex items-center gap-7">
            {NAV.map((n) => (
              <button key={n.id} onClick={() => scrollTo(n.id)} className="text-sm font-500 text-muted-foreground hover:text-foreground transition-colors">
                {n.label}
              </button>
            ))}
          </nav>
          <Button onClick={() => scrollTo('constructor')} className="hidden md:inline-flex font-display tracking-wide">Заказать</Button>
          <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            <Icon name={menuOpen ? 'X' : 'Menu'} size={26} />
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden border-t border-border bg-background/95 px-6 py-4 flex flex-col gap-4 animate-fade-in">
            {NAV.map((n) => (
              <button key={n.id} onClick={() => scrollTo(n.id)} className="text-left text-base font-500">{n.label}</button>
            ))}
          </div>
        )}
      </header>

      {/* HERO */}
      <section id="hero" className="relative pt-32 pb-24 min-h-screen flex items-center grain">
        <div className="absolute -top-20 -right-40 w-[600px] h-[600px] rounded-full bg-primary/20 blur-[140px]" />
        <div className="absolute bottom-0 -left-40 w-[500px] h-[500px] rounded-full bg-accent/10 blur-[140px]" />
        <div className="container relative grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-float-up">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border text-xs font-600 uppercase tracking-widest text-accent mb-6">
              <Icon name="Sparkles" size={14} /> Модельные чехлы под ваш авто
            </span>
            <h1 className="font-display text-5xl sm:text-7xl font-700 leading-[0.95] uppercase mb-6">
              Чехлы, что<br /><span className="text-gradient">сидят идеально</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-md mb-8">
              Собственная база лекал на сотни моделей и комплектаций. Соберите свой комплект в 3D-конструкторе и оплатите онлайн.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" onClick={() => scrollTo('constructor')} className="font-display tracking-wide text-base h-12 px-8 glow">
                <Icon name="Wand2" size={18} className="mr-2" /> Открыть конструктор
              </Button>
              <Button size="lg" variant="outline" onClick={() => scrollTo('gallery')} className="font-display tracking-wide text-base h-12 px-8">
                Смотреть работы
              </Button>
            </div>
            <div className="flex gap-8 mt-12">
              {[['500+', 'моделей в базе'], ['7 лет', 'на рынке'], ['4.9', 'рейтинг клиентов']].map(([n, l]) => (
                <div key={l}>
                  <div className="font-display text-3xl font-700 text-primary">{n}</div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wide">{l}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative animate-float-up" style={{ animationDelay: '0.15s' }}>
            <div className="absolute inset-0 bg-primary/30 blur-3xl rounded-full scale-90" />
            <img src={HERO_IMG} alt="Чехлы для сидений" className="relative rounded-3xl border border-border shadow-2xl w-full object-cover aspect-square" />
            <div className="absolute -bottom-5 -left-5 bg-card border border-border rounded-2xl px-5 py-3 backdrop-blur-xl">
              <div className="flex items-center gap-2 text-accent font-600"><Icon name="ShieldCheck" size={18} /> Гарантия 1 год</div>
            </div>
          </div>
        </div>
      </section>

      {/* CONSTRUCTOR */}
      <section id="constructor" className="py-24 relative">
        <div className="container">
          <div className="text-center mb-14">
            <span className="text-accent font-600 uppercase tracking-widest text-sm">3D-Конструктор</span>
            <h2 className="font-display text-4xl sm:text-5xl font-700 uppercase mt-3">Соберите свой комплект</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-start">
            {/* PREVIEW */}
            <div className="lg:sticky lg:top-24 bg-card border border-border rounded-3xl p-8 grain">
              <div className="relative aspect-square rounded-2xl bg-secondary flex items-center justify-center overflow-hidden">
                <div className="absolute w-72 h-72 rounded-full blur-[80px] animate-spin-slow" style={{ background: color.hex }} />
                {/* Stylized 3D seat */}
                <div className="relative" style={{ filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.5))' }}>
                  <div
                    className="w-44 h-52 rounded-t-[3rem] rounded-b-2xl transition-all duration-500"
                    style={{
                      background: `linear-gradient(150deg, ${color.hex}, ${color.hex}cc 60%, #00000066)`,
                      backgroundImage: material.name.includes('Ромб') || material.name.includes('перфо')
                        ? `linear-gradient(150deg, ${color.hex}, ${color.hex}cc), repeating-linear-gradient(45deg, rgba(0,0,0,0.18) 0 2px, transparent 2px 14px), repeating-linear-gradient(-45deg, rgba(0,0,0,0.18) 0 2px, transparent 2px 14px)`
                        : undefined,
                    }}
                  />
                  <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-52 h-20 rounded-2xl" style={{ background: `linear-gradient(180deg, ${color.hex}dd, ${color.hex}99)` }} />
                </div>
              </div>
              <div className="mt-6 space-y-2">
                <div className="flex justify-between text-sm"><span className="text-muted-foreground">Авто</span><span className="font-600">{brand.brand} {model.name}</span></div>
                <div className="flex justify-between text-sm"><span className="text-muted-foreground">Комплектация</span><span className="font-600">{trim}</span></div>
                <div className="flex justify-between text-sm"><span className="text-muted-foreground">Материал</span><span className="font-600">{material.name}</span></div>
                <div className="flex justify-between text-sm"><span className="text-muted-foreground">Цвет</span><span className="font-600">{color.name}</span></div>
                <div className="flex justify-between items-end pt-4 border-t border-border mt-4">
                  <span className="text-muted-foreground">Итого</span>
                  <span className="font-display text-3xl font-700 text-primary">{material.price.toLocaleString('ru')} ₽</span>
                </div>
                <Button size="lg" className="w-full font-display tracking-wide text-base h-12 mt-2 glow">
                  <Icon name="CreditCard" size={18} className="mr-2" /> Оплатить заказ
                </Button>
              </div>
            </div>

            {/* OPTIONS */}
            <div className="space-y-8">
              <div>
                <h3 className="font-display text-xl uppercase mb-4 flex items-center gap-2"><span className="text-primary">01</span> Марка</h3>
                <div className="relative">
                  <select
                    value={brand.brand}
                    onChange={(e) => {
                      const found = CARS.find(c => c.brand === e.target.value)!;
                      setBrand(found);
                      setModel(found.models[0]);
                      setTrim(found.models[0].trims[0]);
                    }}
                    className="w-full h-12 pl-4 pr-10 rounded-xl border border-border bg-secondary text-foreground text-sm font-500 appearance-none outline-none focus:border-primary transition-colors cursor-pointer"
                  >
                    {CARS.map((c) => (
                      <option key={c.brand} value={c.brand}>{c.brand}</option>
                    ))}
                  </select>
                  <Icon name="ChevronDown" size={18} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none" />
                </div>
              </div>
              <div>
                <h3 className="font-display text-xl uppercase mb-4 flex items-center gap-2"><span className="text-primary">02</span> Модель</h3>
                <div className="relative">
                  <select
                    value={model.name}
                    onChange={(e) => {
                      const found = brand.models.find(m => m.name === e.target.value)!;
                      setModel(found);
                      setTrim(found.trims[0]);
                    }}
                    className="w-full h-12 pl-4 pr-10 rounded-xl border border-border bg-secondary text-foreground text-sm font-500 appearance-none outline-none focus:border-accent transition-colors cursor-pointer"
                  >
                    {brand.models.map((m) => (
                      <option key={m.name} value={m.name}>{m.name}</option>
                    ))}
                  </select>
                  <Icon name="ChevronDown" size={18} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none" />
                </div>
              </div>
              <div>
                <h3 className="font-display text-xl uppercase mb-4 flex items-center gap-2"><span className="text-primary">03</span> Комплектация</h3>
                <div className="relative">
                  <select
                    value={trim}
                    onChange={(e) => setTrim(e.target.value)}
                    className="w-full h-12 pl-4 pr-10 rounded-xl border border-border bg-secondary text-foreground text-sm font-500 appearance-none outline-none focus:border-primary transition-colors cursor-pointer"
                  >
                    {model.trims.map((t) => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                  <Icon name="ChevronDown" size={18} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none" />
                </div>
              </div>
              <div>
                <h3 className="font-display text-xl uppercase mb-4 flex items-center gap-2"><span className="text-primary">04</span> Материал</h3>
                <div className="space-y-3">
                  {MATERIALS.map((m) => (
                    <button key={m.name} onClick={() => setMaterial(m)}
                      className={`w-full text-left p-4 rounded-2xl border transition-all flex justify-between items-center ${material.name === m.name ? 'border-primary bg-primary/10' : 'border-border hover:border-primary/40'}`}>
                      <div>
                        <div className="font-600">{m.name}</div>
                        <div className="text-sm text-muted-foreground">{m.desc}</div>
                      </div>
                      <span className="font-display font-700 text-primary">{m.price.toLocaleString('ru')} ₽</span>
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="font-display text-xl uppercase mb-4 flex items-center gap-2"><span className="text-primary">05</span> Цвет</h3>
                <div className="flex flex-wrap gap-3">
                  {COLORS.map((c) => (
                    <button key={c.name} onClick={() => setColor(c)} title={c.name}
                      className={`w-12 h-12 rounded-full border-2 transition-all ${color.name === c.name ? 'border-foreground scale-110' : 'border-border'}`}
                      style={{ background: c.hex }} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="py-24 bg-card/40">
        <div className="container">
          <div className="flex flex-wrap items-end justify-between gap-4 mb-12">
            <div>
              <span className="text-accent font-600 uppercase tracking-widest text-sm">Портфолио</span>
              <h2 className="font-display text-4xl sm:text-5xl font-700 uppercase mt-3">Наши работы</h2>
            </div>
            <p className="text-muted-foreground max-w-sm">Реальные комплекты, сшитые в нашем цехе по индивидуальным лекалам.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {GALLERY.map((g, i) => (
              <div key={g.title} className="group relative aspect-[3/4] rounded-2xl overflow-hidden border border-border">
                <img src={i % 2 ? MAT_IMG : HERO_IMG} alt={g.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
                <div className="absolute bottom-0 inset-x-0 p-5">
                  <span className="text-xs font-600 uppercase tracking-wide text-accent">{g.tag}</span>
                  <div className="font-display text-lg font-600">{g.title}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-24">
        <div className="container grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img src={MAT_IMG} alt="Производство" className="rounded-3xl border border-border w-full aspect-[4/3] object-cover" />
            <div className="absolute -top-5 -right-5 bg-primary text-primary-foreground rounded-2xl px-6 py-4 font-display">
              <div className="text-3xl font-700 leading-none">7 лет</div>
              <div className="text-xs uppercase tracking-wide">опыта</div>
            </div>
          </div>
          <div>
            <span className="text-accent font-600 uppercase tracking-widest text-sm">О производстве</span>
            <h2 className="font-display text-4xl sm:text-5xl font-700 uppercase mt-3 mb-6">Шьём в собственном цехе</h2>
            <p className="text-muted-foreground mb-8">
              Мы не перекупщики. Своя база лекал, промышленное оборудование и мастера с опытом. Каждый комплект кроится точно под модель и комплектацию вашего авто.
            </p>
            <div className="grid sm:grid-cols-2 gap-5">
              {[
                ['Ruler', 'Точные лекала', 'База на 500+ моделей и комплектаций'],
                ['Scissors', 'Свой цех', 'Контроль качества на каждом этапе'],
                ['Truck', 'Доставка по РФ', 'Отправка в любой город'],
                ['ShieldCheck', 'Гарантия 1 год', 'Уверены в каждом шве'],
              ].map(([icon, t, d]) => (
                <div key={t} className="p-5 rounded-2xl border border-border bg-card">
                  <Icon name={icon} size={26} className="text-primary mb-3" />
                  <div className="font-600 mb-1">{t}</div>
                  <div className="text-sm text-muted-foreground">{d}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section id="reviews" className="py-24 bg-card/40">
        <div className="container">
          <div className="text-center mb-14">
            <span className="text-accent font-600 uppercase tracking-widest text-sm">Отзывы</span>
            <h2 className="font-display text-4xl sm:text-5xl font-700 uppercase mt-3">Что говорят клиенты</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {REVIEWS.map((r) => (
              <div key={r.name} className="p-7 rounded-3xl border border-border bg-card">
                <div className="flex gap-1 mb-4 text-primary">
                  {Array.from({ length: r.stars }).map((_, i) => <Icon key={i} name="Star" size={18} className="fill-current" />)}
                </div>
                <p className="text-foreground/90 mb-6">«{r.text}»</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center font-display font-700 text-primary">{r.name[0]}</div>
                  <div>
                    <div className="font-600">{r.name}</div>
                    <div className="text-sm text-muted-foreground">{r.car}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACTS */}
      <section id="contacts" className="py-24">
        <div className="container">
          <div className="relative rounded-3xl border border-border overflow-hidden grain p-10 sm:p-16">
            <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-primary/20 blur-[120px]" />
            <div className="relative grid lg:grid-cols-2 gap-12">
              <div>
                <h2 className="font-display text-4xl sm:text-5xl font-700 uppercase mb-6">Свяжитесь<br />с нами</h2>
                <p className="text-muted-foreground mb-8 max-w-sm">Подберём чехлы под ваш авто и ответим на все вопросы.</p>
                <div className="space-y-4">
                  {[
                    ['Phone', '+7 (900) 000-00-00', 'Звонок и WhatsApp'],
                    ['Mail', 'order@seatcraft.ru', 'Почта для заказов'],
                    ['MapPin', 'г. Москва, ул. Примерная, 10', 'Наш цех'],
                  ].map(([icon, t, d]) => (
                    <div key={t} className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center"><Icon name={icon} size={22} className="text-primary" /></div>
                      <div><div className="font-600">{t}</div><div className="text-sm text-muted-foreground">{d}</div></div>
                    </div>
                  ))}
                </div>
              </div>
              <form className="bg-card/60 backdrop-blur rounded-2xl border border-border p-6 space-y-4">
                <input className="w-full h-12 px-4 rounded-xl bg-secondary border border-border outline-none focus:border-primary transition-colors" placeholder="Ваше имя" />
                <input className="w-full h-12 px-4 rounded-xl bg-secondary border border-border outline-none focus:border-primary transition-colors" placeholder="Телефон" />
                <input className="w-full h-12 px-4 rounded-xl bg-secondary border border-border outline-none focus:border-primary transition-colors" placeholder="Марка и модель авто" />
                <textarea rows={3} className="w-full px-4 py-3 rounded-xl bg-secondary border border-border outline-none focus:border-primary transition-colors resize-none" placeholder="Комментарий" />
                <Button size="lg" className="w-full font-display tracking-wide h-12 glow">Отправить заявку</Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border py-10">
        <div className="container flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-3">
            <img src="https://cdn.poehali.dev/projects/178c948b-040e-4cc7-ad35-99592fb0b625/bucket/e294517c-d19e-4a37-8616-b92c8c8a6905.png" alt="Авточехол 03" className="h-9 w-9 object-contain" />
            <span className="font-display text-xl font-700"><span className="text-primary">Авточехол</span><span className="text-accent"> 03</span></span>
          </div>
          <div>© 2026 Авточехол 03. Модельные чехлы для авто.</div>
        </div>
      </footer>
    </div>
  );
};

export default Index;