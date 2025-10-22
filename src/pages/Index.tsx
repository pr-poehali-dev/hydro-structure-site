import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const services = [
    {
      icon: "Waves",
      title: "Плотины и дамбы",
      description: "Проектирование гидротехнических сооружений для регулирования водных ресурсов",
    },
    {
      icon: "Factory",
      title: "ГЭС и насосные станции",
      description: "Разработка проектов гидроэлектростанций и систем водоснабжения",
    },
    {
      icon: "Droplets",
      title: "Каналы и водохранилища",
      description: "Проектирование систем водоотведения и накопления воды",
    },
    {
      icon: "ShieldCheck",
      title: "Берегоукрепление",
      description: "Защита береговых линий от эрозии и разрушения",
    },
  ];

  const projects = [
    {
      title: "Гидроузел Северный",
      description: "Комплексное проектирование гидротехнического узла мощностью 150 МВт",
      year: "2023",
    },
    {
      title: "Водохранилище Центральное",
      description: "Проектирование накопительного резервуара объемом 45 млн м³",
      year: "2022",
    },
    {
      title: "Насосная станция Восток",
      description: "Система водоснабжения с производительностью 12000 м³/час",
      year: "2023",
    },
  ];

  const advantages = [
    {
      icon: "Award",
      title: "25+ лет опыта",
      description: "Реализовано более 200 проектов по всей России",
    },
    {
      icon: "Users",
      title: "Команда экспертов",
      description: "Профильные специалисты с опытом работы на крупных объектах",
    },
    {
      icon: "FileCheck",
      title: "Полный цикл услуг",
      description: "От изысканий до авторского надзора",
    },
    {
      icon: "Shield",
      title: "Гарантия качества",
      description: "Все проекты застрахованы и сертифицированы",
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Форма отправлена:", formData);
  };

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 w-full bg-slate-950/95 backdrop-blur-md border-b border-cyan-500/20 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 border border-cyan-500/30 flex items-center justify-center">
                <div className="absolute inset-0 bg-cyan-500/5"></div>
                <Icon name="Waves" size={20} className="text-cyan-400 relative z-10" />
              </div>
              <span className="text-lg font-semibold text-white tracking-wide">GIDROTEX.RU</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#services" className="text-xs text-slate-400 hover:text-cyan-400 transition-colors uppercase tracking-widest">
                Услуги
              </a>
              <a href="#about" className="text-xs text-slate-400 hover:text-cyan-400 transition-colors uppercase tracking-widest">
                О компании
              </a>
              <a href="#projects" className="text-xs text-slate-400 hover:text-cyan-400 transition-colors uppercase tracking-widest">
                Проекты
              </a>
              <a href="#contacts" className="text-xs text-slate-400 hover:text-cyan-400 transition-colors uppercase tracking-widest">
                Контакты
              </a>
            </div>
            <Button size="sm" className="bg-cyan-500 hover:bg-cyan-600 text-slate-950 border-0 text-xs font-semibold uppercase tracking-wider">Связаться</Button>
          </div>
        </div>
      </nav>

      <section className="relative pt-32 pb-24 bg-slate-950 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
        <div className="absolute top-20 left-10 w-64 h-64 border border-cyan-500/10"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 border border-cyan-500/10 rotate-45"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="mb-12">
              <div className="inline-block mb-6">
                <span className="text-xs text-cyan-400 uppercase tracking-[0.3em] border border-cyan-500/30 px-4 py-2 bg-cyan-500/5">
                  Инженерные технологии
                </span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6 tracking-tight">
                ПРОЕКТИРОВАНИЕ<br />ГИДРОСООРУЖЕНИЙ
              </h1>
              <p className="text-lg text-slate-400 max-w-2xl">
                Полный цикл инженерных услуг от изысканий до авторского надзора. Применение передовых технологий в гидротехническом строительстве.
              </p>
            </div>
            <div className="relative mb-12 border-2 border-cyan-500/30">
              <div className="absolute -top-3 -left-3 w-6 h-6 border-t-2 border-l-2 border-cyan-500"></div>
              <div className="absolute -top-3 -right-3 w-6 h-6 border-t-2 border-r-2 border-cyan-500"></div>
              <div className="absolute -bottom-3 -left-3 w-6 h-6 border-b-2 border-l-2 border-cyan-500"></div>
              <div className="absolute -bottom-3 -right-3 w-6 h-6 border-b-2 border-r-2 border-cyan-500"></div>
              <img
                src="https://cdn.poehali.dev/files/ef4ba383-8e1a-4544-a8e6-722bf9db8219.jpg"
                alt="Гидротехническое сооружение"
                className="w-full aspect-[21/9] object-cover"
              />
              <div className="absolute top-4 right-4 bg-slate-950/80 backdrop-blur-sm border border-cyan-500/30 px-4 py-3">
                <div className="text-3xl font-bold text-cyan-400 tabular-nums">200+</div>
                <div className="text-xs text-slate-400 uppercase tracking-wider">Проектов</div>
              </div>
            </div>
            <div className="flex gap-4">
              <Button size="lg" className="bg-cyan-500 hover:bg-cyan-600 text-slate-950 border-0 text-sm font-semibold uppercase tracking-wider">Получить консультацию</Button>
              <Button size="lg" variant="outline" className="border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10 text-sm uppercase tracking-wider">Наши проекты</Button>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-24 bg-slate-900 border-t border-cyan-500/20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-3 uppercase tracking-wide">Услуги</h2>
              <div className="w-20 h-0.5 bg-cyan-500"></div>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <div key={index} className="relative border border-cyan-500/20 bg-slate-950/50 p-8 group hover:border-cyan-500/50 transition-all">
                  <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-cyan-500"></div>
                  <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-cyan-500"></div>
                  <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-cyan-500"></div>
                  <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-cyan-500"></div>
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 border border-cyan-500/30 flex items-center justify-center bg-cyan-500/5 flex-shrink-0">
                      <Icon name={service.icon} size={24} className="text-cyan-400" />
                    </div>
                    <div>
                      <div className="text-xs text-cyan-400 mb-2 uppercase tracking-widest">0{index + 1}</div>
                      <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                    </div>
                  </div>
                  <p className="text-slate-400 leading-relaxed">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-24 bg-slate-950 border-t border-cyan-500/20 relative">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.02)_1px,transparent_1px)] bg-[size:100px_100px]"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-3 uppercase tracking-wide">О компании</h2>
              <div className="w-20 h-0.5 bg-cyan-500 mb-8"></div>
              <p className="text-lg text-slate-400 max-w-2xl">
                Специализируемся на проектировании гидротехнических сооружений с 1998 года
              </p>
            </div>
            <div className="grid md:grid-cols-4 gap-6">
              {advantages.map((advantage, index) => (
                <div key={index} className="border border-cyan-500/20 bg-slate-900/50 p-6 relative group hover:border-cyan-500/50 transition-all">
                  <div className="absolute -top-px -left-px w-8 h-8 border-t-2 border-l-2 border-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="absolute -bottom-px -right-px w-8 h-8 border-b-2 border-r-2 border-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="w-12 h-12 border border-cyan-500/30 flex items-center justify-center bg-cyan-500/5 mb-4">
                    <Icon name={advantage.icon} size={24} className="text-cyan-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{advantage.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{advantage.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="py-24 bg-slate-900 border-t border-cyan-500/20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-3 uppercase tracking-wide">Проекты</h2>
              <div className="w-20 h-0.5 bg-cyan-500"></div>
            </div>
            <div className="grid gap-6">
              {projects.map((project, index) => (
                <div key={index} className="relative border border-cyan-500/20 bg-slate-950/50 p-8 group hover:border-cyan-500/50 transition-all">
                  <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-cyan-500"></div>
                  <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-cyan-500"></div>
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-4">
                      <div className="text-2xl font-bold text-cyan-400/30 tabular-nums">0{index + 1}</div>
                      <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
                    </div>
                    <span className="text-sm text-cyan-400 border border-cyan-500/30 px-3 py-1 bg-cyan-500/5 tabular-nums">{project.year}</span>
                  </div>
                  <p className="text-slate-400 max-w-3xl pl-12">{project.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-24 bg-slate-950 border-t border-cyan-500/20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-3 uppercase tracking-wide">Контакты</h2>
              <div className="w-20 h-0.5 bg-cyan-500"></div>
            </div>
            <div className="grid md:grid-cols-2 gap-16">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="ИМЯ"
                    className="bg-slate-900 border border-cyan-500/20 text-white placeholder:text-slate-600 focus-visible:border-cyan-500 rounded-none h-12"
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="EMAIL"
                    className="bg-slate-900 border border-cyan-500/20 text-white placeholder:text-slate-600 focus-visible:border-cyan-500 rounded-none h-12"
                  />
                </div>
                <div>
                  <Input
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="ТЕЛЕФОН"
                    className="bg-slate-900 border border-cyan-500/20 text-white placeholder:text-slate-600 focus-visible:border-cyan-500 rounded-none h-12"
                  />
                </div>
                <div>
                  <Textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="СООБЩЕНИЕ"
                    rows={4}
                    className="bg-slate-900 border border-cyan-500/20 text-white placeholder:text-slate-600 focus-visible:border-cyan-500 rounded-none resize-none"
                  />
                </div>
                <Button type="submit" size="lg" className="bg-cyan-500 hover:bg-cyan-600 text-slate-950 border-0 text-sm font-semibold uppercase tracking-wider w-full">
                  Отправить заявку
                </Button>
              </form>
              <div className="space-y-8">
                <div className="border-l-2 border-cyan-500 pl-6">
                  <h3 className="text-xs text-cyan-400 mb-2 uppercase tracking-widest">Телефон</h3>
                  <p className="text-xl text-white font-light">+7 (495) 123-45-67</p>
                </div>
                <div className="border-l-2 border-cyan-500 pl-6">
                  <h3 className="text-xs text-cyan-400 mb-2 uppercase tracking-widest">Email</h3>
                  <p className="text-xl text-white font-light">info@gidrotex.ru</p>
                </div>
                <div className="border-l-2 border-cyan-500 pl-6">
                  <h3 className="text-xs text-cyan-400 mb-2 uppercase tracking-widest">Адрес</h3>
                  <p className="text-xl text-white font-light">г. Москва, ул. Инженерная, д. 15</p>
                </div>
                <div className="border-l-2 border-cyan-500 pl-6">
                  <h3 className="text-xs text-cyan-400 mb-2 uppercase tracking-widest">Режим работы</h3>
                  <p className="text-xl text-white font-light">Пн-Пт: 9:00 - 18:00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-slate-950 border-t border-cyan-500/20 py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center gap-3 mb-4 md:mb-0">
              <div className="w-8 h-8 border border-cyan-500/30 flex items-center justify-center bg-cyan-500/5">
                <Icon name="Waves" size={16} className="text-cyan-400" />
              </div>
              <span className="text-sm font-semibold text-white tracking-wider">GIDROTEX.RU</span>
            </div>
            <p className="text-xs text-slate-500 uppercase tracking-wider">© 2024 Все права защищены</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;