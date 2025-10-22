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
      <nav className="fixed top-0 w-full bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 backdrop-blur-sm border-b border-cyan-500/20 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="absolute inset-0 bg-cyan-500/20 blur-lg rounded-full"></div>
                <Icon name="Waves" size={32} className="text-cyan-400 relative" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">ГидроПроект</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#services" className="text-slate-300 hover:text-cyan-400 transition-colors font-medium">
                Услуги
              </a>
              <a href="#about" className="text-slate-300 hover:text-cyan-400 transition-colors font-medium">
                О компании
              </a>
              <a href="#projects" className="text-slate-300 hover:text-cyan-400 transition-colors font-medium">
                Проекты
              </a>
              <a href="#contacts" className="text-slate-300 hover:text-cyan-400 transition-colors font-medium">
                Контакты
              </a>
            </div>
            <Button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 border-0 shadow-lg shadow-cyan-500/30">Оставить заявку</Button>
          </div>
        </div>
      </nav>

      <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/30 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/30 rounded-full filter blur-3xl"></div>
        </div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iIzA2YjZkNCIgc3Ryb2tlLW9wYWNpdHk9Ii4xIi8+PC9nPjwvc3ZnPg==')] opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block">
                <span className="text-sm font-semibold text-cyan-400 uppercase tracking-wider border border-cyan-500/30 px-4 py-2 rounded-full bg-cyan-500/10">
                  Инженерные технологии
                </span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
                Проектирование <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">гидросооружений</span>
              </h1>
              <p className="text-xl text-slate-300">
                Надежность и экспертность, проверенные временем. Полный цикл инженерных услуг от изысканий до авторского надзора.
              </p>
              <div className="flex gap-4">
                <Button size="lg" className="text-lg bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 border-0 shadow-lg shadow-cyan-500/30">
                  Получить консультацию
                </Button>
                <Button size="lg" variant="outline" className="text-lg text-slate-300 border-cyan-500/30 hover:bg-cyan-500/10 hover:text-cyan-400">
                  Наши проекты
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-lg blur-2xl"></div>
              <div className="relative border-2 border-cyan-500/30 rounded-lg overflow-hidden">
                <img
                  src="https://cdn.poehali.dev/files/ef4ba383-8e1a-4544-a8e6-722bf9db8219.jpg"
                  alt="Гидротехническое сооружение"
                  className="w-full"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 border-2 border-cyan-500/30 rounded-lg bg-slate-900/50 backdrop-blur-sm flex items-center justify-center">
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-400">200+</div>
                  <div className="text-xs text-slate-400 uppercase">Проектов</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Наши услуги</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Комплексные решения для проектирования гидротехнических объектов любой сложности
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="border border-slate-200 hover:border-cyan-500/50 transition-all hover:shadow-xl hover:shadow-cyan-500/10 group bg-white">
                <CardContent className="p-6 space-y-4">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <div className="relative w-16 h-16 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-lg flex items-center justify-center border border-cyan-500/20">
                      <Icon name={service.icon} size={32} className="text-cyan-600" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">{service.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPjxwYXRoIGQ9Ik0gMTAwIDAgTCAwIDAgMCAxMDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzA2YjZkNCIgc3Ryb2tlLW9wYWNpdHk9IjAuMDUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-40"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">О компании</h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Мы специализируемся на проектировании гидротехнических сооружений с 1998 года
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => (
              <div key={index} className="text-center space-y-4 group">
                <div className="relative inline-block">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
                  <div className="relative w-20 h-20 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mx-auto border border-cyan-400/30">
                    <Icon name={advantage.icon} size={40} className="text-white" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white">{advantage.title}</h3>
                <p className="text-slate-400">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Реализованные проекты</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Примеры успешно выполненных работ
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-2xl transition-all border border-slate-200 hover:border-cyan-500/50 group bg-white">
                <div className="relative h-48 bg-gradient-to-br from-cyan-500 via-blue-600 to-slate-800 overflow-hidden">
                  <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLW9wYWNpdHk9Ii4xIi8+PC9nPjwvc3ZnPg==')] opacity-30"></div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Icon name="ArrowRight" size={48} className="text-white" />
                  </div>
                </div>
                <CardContent className="p-6 space-y-3">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold text-foreground">{project.title}</h3>
                    <span className="text-sm font-semibold text-cyan-600 bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/20">
                      {project.year}
                    </span>
                  </div>
                  <p className="text-muted-foreground text-sm">{project.description}</p>
                  <Button variant="outline" className="w-full border-cyan-500/30 text-cyan-600 hover:bg-cyan-500/10">
                    Подробнее
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-foreground mb-4">Свяжитесь с нами</h2>
              <p className="text-xl text-muted-foreground">
                Оставьте заявку, и мы свяжемся с вами в ближайшее время
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-12">
              <Card className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Ваше имя</label>
                    <Input
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Иван Иванов"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <Input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="ivan@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Телефон</label>
                    <Input
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+7 (999) 123-45-67"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Сообщение</label>
                    <Textarea
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Расскажите о вашем проекте"
                      rows={4}
                    />
                  </div>
                  <Button type="submit" size="lg" className="w-full">
                    Отправить заявку
                  </Button>
                </form>
              </Card>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="Phone" className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Телефон</h3>
                    <p className="text-muted-foreground">+7 (495) 123-45-67</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="Mail" className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Email</h3>
                    <p className="text-muted-foreground">info@gidroproekt.ru</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="MapPin" className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Адрес</h3>
                    <p className="text-muted-foreground">г. Москва, ул. Инженерная, д. 15</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="Clock" className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Режим работы</h3>
                    <p className="text-muted-foreground">Пн-Пт: 9:00 - 18:00</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 text-white py-8 border-t border-cyan-500/20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center gap-3 mb-4 md:mb-0">
              <div className="relative">
                <div className="absolute inset-0 bg-cyan-500/20 blur-lg rounded-full"></div>
                <Icon name="Waves" size={28} className="text-cyan-400 relative" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">ГидроПроект</span>
            </div>
            <p className="text-slate-400">© 2024 ГидроПроект. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;