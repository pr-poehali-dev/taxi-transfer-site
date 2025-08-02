import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-primary text-primary-foreground py-4 px-6">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Icon name="Car" size={32} />
            <h1 className="text-2xl font-bold">TransferTaxi</h1>
          </div>
          <nav className="hidden md:flex gap-6">
            <a href="#home" className="hover:text-accent transition-colors">Главная</a>
            <a href="#tariffs" className="hover:text-accent transition-colors">Тарифы</a>
            <a href="#booking" className="hover:text-accent transition-colors">Заказ</a>
            <a href="#contacts" className="hover:text-accent transition-colors">Контакты</a>
          </nav>
          <Button variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
            <Icon name="Phone" size={16} className="mr-2" />
            +7 (999) 123-45-67
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="bg-gradient-to-br from-primary via-muted to-primary/90 text-primary-foreground py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold mb-6 animate-fade-in">
            Надёжный трансфер такси
          </h2>
          <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto animate-fade-in">
            Комфортабельные поездки с профессиональными водителями. 
            Онлайн-бронирование, фиксированные тарифы, круглосуточная поддержка.
          </p>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-3 animate-scale-in">
              <Icon name="Clock" size={24} className="text-accent" />
              <span>24/7 доступность</span>
            </div>
            <div className="flex items-center justify-center gap-3 animate-scale-in">
              <Icon name="Shield" size={24} className="text-accent" />
              <span>Гарантия безопасности</span>
            </div>
            <div className="flex items-center justify-center gap-3 animate-scale-in">
              <Icon name="Star" size={24} className="text-accent" />
              <span>Высокое качество</span>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section id="booking" className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <h3 className="text-3xl font-bold text-center mb-12 text-foreground">Забронировать поездку</h3>
          <Card className="max-w-4xl mx-auto">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="MapPin" size={24} className="text-accent" />
                Детали поездки
              </CardTitle>
              <CardDescription>
                Заполните форму для онлайн-бронирования трансфера
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="from">Откуда</Label>
                    <Input id="from" placeholder="Адрес отправления" />
                  </div>
                  <div>
                    <Label htmlFor="to">Куда</Label>
                    <Input id="to" placeholder="Адрес назначения" />
                  </div>
                  <div>
                    <Label htmlFor="date">Дата</Label>
                    <Input id="date" type="date" />
                  </div>
                  <div>
                    <Label htmlFor="time">Время</Label>
                    <Input id="time" type="time" />
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="passengers">Количество пассажиров</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Выберите количество" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">1 пассажир</SelectItem>
                        <SelectItem value="2">2 пассажира</SelectItem>
                        <SelectItem value="3">3 пассажира</SelectItem>
                        <SelectItem value="4">4 пассажира</SelectItem>
                        <SelectItem value="more">Больше 4</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="vehicle">Тип автомобиля</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Выберите класс" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="economy">Эконом</SelectItem>
                        <SelectItem value="comfort">Комфорт</SelectItem>
                        <SelectItem value="business">Бизнес</SelectItem>
                        <SelectItem value="premium">Премиум</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="phone">Телефон</Label>
                    <Input id="phone" placeholder="+7 (999) 123-45-67" />
                  </div>
                  <div>
                    <Label htmlFor="notes">Дополнительные пожелания</Label>
                    <Textarea id="notes" placeholder="Комментарии к заказу" />
                  </div>
                </div>
              </div>
              <Button className="w-full mt-6 bg-accent hover:bg-accent/90 text-accent-foreground" size="lg">
                <Icon name="Calendar" size={20} className="mr-2" />
                Забронировать поездку
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Tariffs */}
      <section id="tariffs" className="py-16 bg-muted/30">
        <div className="container mx-auto px-6">
          <h3 className="text-3xl font-bold text-center mb-12 text-foreground">Тарифы</h3>
          <div className="grid md:grid-cols-4 gap-6">
            <Card className="relative">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Car" size={24} className="text-muted-foreground" />
                  Эконом
                </CardTitle>
                <CardDescription>Базовый комфорт</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-accent mb-4">от 800₽</div>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={16} className="text-green-600" />
                    Седан, до 4 пассажиров
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={16} className="text-green-600" />
                    Кондиционер
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={16} className="text-green-600" />
                    Базовая страховка
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="relative">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Car" size={24} className="text-blue-600" />
                  Комфорт
                </CardTitle>
                <CardDescription>Повышенный комфорт</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-accent mb-4">от 1200₽</div>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={16} className="text-green-600" />
                    Универсал/кроссовер
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={16} className="text-green-600" />
                    Wi-Fi в автомобиле
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={16} className="text-green-600" />
                    Полная страховка
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="relative border-accent">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-medium">
                  Популярный
                </span>
              </div>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Car" size={24} className="text-accent" />
                  Бизнес
                </CardTitle>
                <CardDescription>Премиальный сервис</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-accent mb-4">от 1800₽</div>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={16} className="text-green-600" />
                    Бизнес-класс автомобиль
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={16} className="text-green-600" />
                    Персональный водитель
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={16} className="text-green-600" />
                    VIP страховка
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="relative">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Car" size={24} className="text-purple-600" />
                  Премиум
                </CardTitle>
                <CardDescription>Максимальная роскошь</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-accent mb-4">от 3000₽</div>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={16} className="text-green-600" />
                    Люксовые автомобили
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={16} className="text-green-600" />
                    Консьерж-сервис
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={16} className="text-green-600" />
                    Максимальная страховка
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contacts */}
      <section id="contacts" className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <h3 className="text-3xl font-bold text-center mb-12 text-foreground">Контакты</h3>
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div>
              <h4 className="text-xl font-semibold mb-6">Свяжитесь с нами</h4>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Icon name="Phone" size={20} className="text-accent" />
                  <span>+7 (999) 123-45-67</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="Mail" size={20} className="text-accent" />
                  <span>info@transfertaxi.ru</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="MapPin" size={20} className="text-accent" />
                  <span>г. Москва, ул. Примерная, д. 123</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="Clock" size={20} className="text-accent" />
                  <span>Круглосуточно, без выходных</span>
                </div>
              </div>
              
              <div className="mt-8">
                <h5 className="font-semibold mb-4">Преимущества нашего сервиса</h5>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="flex items-center gap-2">
                    <Icon name="CheckCircle" size={16} className="text-green-600" />
                    <span className="text-sm">Фиксированные тарифы</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="CheckCircle" size={16} className="text-green-600" />
                    <span className="text-sm">Онлайн-отслеживание</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="CheckCircle" size={16} className="text-green-600" />
                    <span className="text-sm">Профессиональные водители</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="CheckCircle" size={16} className="text-green-600" />
                    <span className="text-sm">Чистые автомобили</span>
                  </div>
                </div>
              </div>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Быстрый заказ</CardTitle>
                <CardDescription>Оставьте заявку и мы перезвоним в течение 5 минут</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="quick-name">Имя</Label>
                    <Input id="quick-name" placeholder="Ваше имя" />
                  </div>
                  <div>
                    <Label htmlFor="quick-phone">Телефон</Label>
                    <Input id="quick-phone" placeholder="+7 (999) 123-45-67" />
                  </div>
                  <div>
                    <Label htmlFor="quick-route">Маршрут</Label>
                    <Input id="quick-route" placeholder="Откуда - Куда" />
                  </div>
                  <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                    <Icon name="Phone" size={16} className="mr-2" />
                    Заказать обратный звонок
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <Icon name="Car" size={24} />
              <span className="text-lg font-semibold">TransferTaxi</span>
            </div>
            <div className="text-sm text-primary-foreground/80">
              © 2024 TransferTaxi. Все права защищены.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;