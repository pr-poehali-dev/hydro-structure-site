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
      <nav className="fixed top-0 w-full bg-white border-b border-slate-200 z-50">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="Waves" size={24} className="text-foreground" />
              <span className="text-xl font-semibold text-foreground tracking-tight">ГидроПроект</span>
            </div>
            <div className="hidden md:flex items-center gap-10">
              <a href="#services" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Услуги
              </a>
              <a href="#about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                О компании
              </a>
              <a href="#projects" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Проекты
              </a>
              <a href="#contacts" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Контакты
              </a>
            </div>
            <Button size="sm" className="text-sm">Связаться</Button>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="mb-16">
              <h1 className="text-5xl md:text-6xl font-light text-foreground leading-tight mb-6">
                Проектирование<br />гидросооружений
              </h1>
              <p className="text-lg text-muted-foreground max-w-xl">
                Полный цикл инженерных услуг от изысканий до авторского надзора
              </p>
            </div>
            <div className="mb-12">
              <img
                src="https://cdn.poehali.dev/files/ef4ba383-8e1a-4544-a8e6-722bf9db8219.jpg"
                alt="Гидротехническое сооружение"
                className="w-full aspect-[21/9] object-cover"
              />
            </div>
            <div className="flex gap-6">
              <Button size="lg">Связаться</Button>
              <Button size="lg" variant="outline">Проекты</Button>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="mb-16">
              <h2 className="text-3xl font-light text-foreground mb-3">Услуги</h2>
              <div className="w-12 h-px bg-foreground"></div>
            </div>
            <div className="grid md:grid-cols-2 gap-12">
              {services.map((service, index) => (
                <div key={index} className="space-y-3">
                  <h3 className="text-xl font-medium text-foreground">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-24 bg-white border-t border-slate-200">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="mb-16">
              <h2 className="text-3xl font-light text-foreground mb-3">О компании</h2>
              <div className="w-12 h-px bg-foreground mb-8"></div>
              <p className="text-lg text-muted-foreground max-w-2xl">
                Специализируемся на проектировании гидротехнических сооружений с 1998 года
              </p>
            </div>
            <div className="grid md:grid-cols-4 gap-x-8 gap-y-12">
              {advantages.map((advantage, index) => (
                <div key={index} className="space-y-3">
                  <h3 className="text-2xl font-light text-foreground">{advantage.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{advantage.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="mb-16">
              <h2 className="text-3xl font-light text-foreground mb-3">Проекты</h2>
              <div className="w-12 h-px bg-foreground"></div>
            </div>
            <div className="space-y-16">
              {projects.map((project, index) => (
                <div key={index} className="border-b border-slate-200 pb-12 last:border-0">
                  <div className="flex items-baseline justify-between mb-4">
                    <h3 className="text-2xl font-light text-foreground">{project.title}</h3>
                    <span className="text-sm text-muted-foreground">{project.year}</span>
                  </div>
                  <p className="text-muted-foreground max-w-2xl">{project.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-24 bg-white border-t border-slate-200">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="mb-16">
              <h2 className="text-3xl font-light text-foreground mb-3">Контакты</h2>
              <div className="w-12 h-px bg-foreground"></div>
            </div>
            <div className="grid md:grid-cols-2 gap-20">
              <form onSubmit={handleSubmit} className="space-y-8">
                <div>
                  <Input
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Имя"
                    className="border-0 border-b border-slate-300 rounded-none px-0 focus-visible:ring-0 focus-visible:border-foreground"
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="Email"
                    className="border-0 border-b border-slate-300 rounded-none px-0 focus-visible:ring-0 focus-visible:border-foreground"
                  />
                </div>
                <div>
                  <Input
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="Телефон"
                    className="border-0 border-b border-slate-300 rounded-none px-0 focus-visible:ring-0 focus-visible:border-foreground"
                  />
                </div>
                <div>
                  <Textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Сообщение"
                    rows={3}
                    className="border-0 border-b border-slate-300 rounded-none px-0 resize-none focus-visible:ring-0 focus-visible:border-foreground"
                  />
                </div>
                <Button type="submit" size="lg">
                  Отправить
                </Button>
              </form>
              <div className="space-y-8">
                <div>
                  <h3 className="text-sm text-muted-foreground mb-2">Телефон</h3>
                  <p className="text-lg text-foreground">+7 (495) 123-45-67</p>
                </div>
                <div>
                  <h3 className="text-sm text-muted-foreground mb-2">Email</h3>
                  <p className="text-lg text-foreground">info@gidroproekt.ru</p>
                </div>
                <div>
                  <h3 className="text-sm text-muted-foreground mb-2">Адрес</h3>
                  <p className="text-lg text-foreground">г. Москва, ул. Инженерная, д. 15</p>
                </div>
                <div>
                  <h3 className="text-sm text-muted-foreground mb-2">Режим работы</h3>
                  <p className="text-lg text-foreground">Пн-Пт: 9:00 - 18:00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-slate-50 border-t border-slate-200 py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <Icon name="Waves" size={20} className="text-foreground" />
              <span className="text-sm font-medium text-foreground">ГидроПроект</span>
            </div>
            <p className="text-sm text-muted-foreground">© 2024 Все права защищены</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;