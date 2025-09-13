import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-yellow-50">
      {/* Fixed CTA Header */}
      <div className="fixed top-0 left-0 right-0 bg-gradient-to-r from-orange-500 to-yellow-400 text-white py-2 px-4 text-center text-sm font-medium z-50">
        🔥 Мест осталось мало! Свободные слоты на этой неделе
      </div>

      {/* Hero Section */}
      <section className="pt-16 pb-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <Badge className="bg-orange-100 text-orange-800 mb-6 px-4 py-2 text-sm">
            ⭐ Учебный макет - пародия на инфо-продукты
          </Badge>
          
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-orange-600 to-yellow-500 bg-clip-text text-transparent mb-6">
            Новая жизнь начинается<br />с первой сессии?
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto">
            Пошаговый план работы над запросом. Обычно первые сдвиги клиенты замечают быстро*
          </p>
          
          <div className="flex flex-col md:flex-row gap-4 justify-center mb-8">
            <Button size="lg" className="bg-gradient-to-r from-orange-500 to-yellow-400 hover:from-orange-600 hover:to-yellow-500 text-white px-8 py-4 text-lg">
              Записаться сейчас
            </Button>
            <Button variant="outline" size="lg" className="border-orange-300 text-orange-600 hover:bg-orange-50 px-8 py-4 text-lg">
              Начать с теста за 3 минуты
            </Button>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <Icon name="Shield" size={16} className="text-green-500" />
              Конфиденциальность
            </div>
            <div className="flex items-center gap-2">
              <Icon name="User" size={16} className="text-blue-500" />
              Индивидуальный подход
            </div>
            <div className="flex items-center gap-2">
              <Icon name="CreditCard" size={16} className="text-purple-500" />
              Оплата онлайн
            </div>
          </div>
          
          <p className="text-xs text-gray-500 mt-4">
            *Опыт индивидуален. Это обучающий макет, не обещание результата.
          </p>
        </div>
      </section>

      {/* Offer Section */}
      <section className="py-16 bg-gradient-to-r from-orange-500 to-yellow-400 text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold mb-6">Что входит в работу</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <Card className="bg-white/10 border-white/20 text-white">
              <CardContent className="p-4 text-center">
                <Icon name="Search" size={32} className="mx-auto mb-2" />
                <h3 className="font-semibold">Диагностика запроса</h3>
              </CardContent>
            </Card>
            <Card className="bg-white/10 border-white/20 text-white">
              <CardContent className="p-4 text-center">
                <Icon name="Map" size={32} className="mx-auto mb-2" />
                <h3 className="font-semibold">План из 3 шагов</h3>
              </CardContent>
            </Card>
            <Card className="bg-white/10 border-white/20 text-white">
              <CardContent className="p-4 text-center">
                <Icon name="Home" size={32} className="mx-auto mb-2" />
                <h3 className="font-semibold">Домашние практики</h3>
              </CardContent>
            </Card>
            <Card className="bg-white/10 border-white/20 text-white">
              <CardContent className="p-4 text-center">
                <Icon name="MessageCircle" size={32} className="mx-auto mb-2" />
                <h3 className="font-semibold">Поддержка в чате 7 дней</h3>
              </CardContent>
            </Card>
          </div>
          <div className="mt-8">
            <p className="text-lg mb-2">Обычно 8900₽</p>
            <p className="text-3xl font-bold">Сегодня 7120₽ (−20%)</p>
          </div>
        </div>
      </section>

      {/* Pricing Packages */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">Выберите пакет</h2>
          <p className="text-center text-gray-600 mb-12">Результат индивидуален</p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Starter Package */}
            <Card className="border-gray-200">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Старт</CardTitle>
                <div className="text-3xl font-bold text-orange-600">3990₽</div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={16} className="text-green-500" />
                    1 сессия 60 минут
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={16} className="text-green-500" />
                    Мини-план действий
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={16} className="text-green-500" />
                    Чек-лист самопомощи
                  </li>
                </ul>
                <Button className="w-full bg-orange-500 hover:bg-orange-600">
                  Купить
                </Button>
                <Button variant="outline" className="w-full mt-2">
                  Рассрочка
                </Button>
              </CardContent>
            </Card>

            {/* Turbo Package */}
            <Card className="border-orange-300 relative">
              <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-orange-500 text-white">
                ПОПУЛЯРНЫЙ
              </Badge>
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Турбо</CardTitle>
                <div className="text-3xl font-bold text-orange-600">9990₽</div>
                <p className="text-sm text-gray-600">часто хватает, чтобы наметить сдвиг</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={16} className="text-green-500" />
                    3 сессии по 60 минут
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={16} className="text-green-500" />
                    Персональные чек-листы
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={16} className="text-green-500" />
                    Чат-поддержка 7 дней
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={16} className="text-green-500" />
                    Аудио-практики
                  </li>
                </ul>
                <Button className="w-full bg-gradient-to-r from-orange-500 to-yellow-400 hover:from-orange-600 hover:to-yellow-500">
                  Взять пакет со скидкой
                </Button>
                <Button variant="outline" className="w-full mt-2">
                  Два платежа
                </Button>
              </CardContent>
            </Card>

            {/* VIP Package */}
            <Card className="border-purple-300">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">VIP</CardTitle>
                <div className="text-3xl font-bold text-purple-600">24990₽</div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={16} className="text-green-500" />
                    8 сессий по 90 минут
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={16} className="text-green-500" />
                    Еженедельная обратная связь
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={16} className="text-green-500" />
                    Приоритетные слоты
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={16} className="text-green-500" />
                    Индивидуальные практики
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={16} className="text-green-500" />
                    Поддержка 30 дней
                  </li>
                </ul>
                <Button className="w-full bg-purple-600 hover:bg-purple-700">
                  Хочу план на 7 дней
                </Button>
                <Button variant="outline" className="w-full mt-2">
                  Рассрочка
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Отзывы клиентов</h2>
          
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card>
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Icon key={i} name="Star" size={16} className="text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="mb-4">"После первой сессии поняла, что делаю не так. Юрий помог разложить всё по полочкам!"</p>
                <p className="text-sm text-gray-600">— Анна, менеджер</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Icon key={i} name="Star" size={16} className="text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="mb-4">"Три встречи изменили моё отношение к работе. Стал спокойнее относиться к дедлайнам."</p>
                <p className="text-sm text-gray-600">— Михаил, дизайнер</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Icon key={i} name="Star" size={16} className="text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="mb-4">"Чек-листы очень помогают в сложные моменты. Теперь знаю, что делать с тревогой."</p>
                <p className="text-sm text-gray-600">— Елена, студентка</p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Badge className="bg-orange-100 text-orange-800 px-4 py-2">
              Пародия: со мной работали 247+ клиентов
            </Badge>
          </div>

          {/* Mood Graphs */}
          <div className="mt-12">
            <h3 className="text-2xl font-bold text-center mb-8">Динамика настроения (иллюстрация)</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">До работы</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm">Тревога</span>
                        <span className="text-sm">80%</span>
                      </div>
                      <Progress value={80} className="h-2 bg-red-100" />
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm">Уверенность</span>
                        <span className="text-sm">30%</span>
                      </div>
                      <Progress value={30} className="h-2 bg-blue-100" />
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm">Мотивация</span>
                        <span className="text-sm">25%</span>
                      </div>
                      <Progress value={25} className="h-2 bg-green-100" />
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">После работы</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm">Тревога</span>
                        <span className="text-sm">35%</span>
                      </div>
                      <Progress value={35} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm">Уверенность</span>
                        <span className="text-sm">75%</span>
                      </div>
                      <Progress value={75} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm">Мотивация</span>
                        <span className="text-sm">85%</span>
                      </div>
                      <Progress value={85} className="h-2" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Method Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-8">Как это работает</h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="FileText" size={24} className="text-orange-600" />
                </div>
                <h3 className="font-semibold mb-2">1. Заявка</h3>
                <p className="text-sm text-gray-600">Заполняете форму и описываете запрос</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Search" size={24} className="text-blue-600" />
                </div>
                <h3 className="font-semibold mb-2">2. Диагностика</h3>
                <p className="text-sm text-gray-600">Первая встреча для понимания ситуации</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Map" size={24} className="text-green-600" />
                </div>
                <h3 className="font-semibold mb-2">3. План</h3>
                <p className="text-sm text-gray-600">Составляем пошаговый план работы</p>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-gradient-to-r from-purple-50 to-pink-50 border-purple-200">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Мой метод</CardTitle>
            </CardHeader>
            <CardContent>
              <blockquote className="text-lg italic text-center mb-4 text-gray-700">
                "Болезни не случайность, за каждой скрывается психологическая проблема. У меня на терапии вы научитесь находить их причины и избавляться от них."
              </blockquote>
              <p className="text-sm text-gray-600 text-center">
                — взгляды персонажа
              </p>
              <Separator className="my-4" />
              <p className="text-sm text-gray-600 text-center">
                В реальности факторы многокомпонентны; цель — исследовать психологическую сторону запроса.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Bonuses */}
      <section className="py-16 bg-gradient-to-r from-yellow-400 to-orange-400 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Бонусы только сегодня</h2>
          <p className="mb-8">При записи на любой пакет</p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Card className="bg-white/10 border-white/20 text-white">
              <CardContent className="p-6 text-center">
                <Icon name="CheckSquare" size={32} className="mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Чек-лист самопомощи</h3>
                <p className="text-sm">В сложные дни</p>
              </CardContent>
            </Card>
            
            <Card className="bg-white/10 border-white/20 text-white">
              <CardContent className="p-6 text-center">
                <Icon name="Headphones" size={32} className="mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Аудио-практика</h3>
                <p className="text-sm">Дыхание 5 минут</p>
              </CardContent>
            </Card>
            
            <Card className="bg-white/10 border-white/20 text-white">
              <CardContent className="p-6 text-center">
                <Icon name="Video" size={32} className="mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Закрытый вебинар</h3>
                <p className="text-sm">Как формулировать запрос</p>
              </CardContent>
            </Card>
          </div>
          
          <p className="text-sm opacity-80">
            Бонусы — дополнительный материал, не замена терапии
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Частые вопросы</h2>
          
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="time" className="border rounded-lg px-6">
              <AccordionTrigger className="text-left">
                Сколько это займёт времени?
              </AccordionTrigger>
              <AccordionContent>
                По-разному, иногда первые сдвиги замечают быстро; зависит от запроса. Обычно видим динамику за 3-5 встреч.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="fit" className="border rounded-lg px-6">
              <AccordionTrigger className="text-left">
                А если мне не подойдёт?
              </AccordionTrigger>
              <AccordionContent>
                Получите чек-лист и рекомендации по альтернативам. Никого не принуждаем продолжать.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="doctor" className="border rounded-lg px-6">
              <AccordionTrigger className="text-left">
                Это вместо врача?
              </AccordionTrigger>
              <AccordionContent>
                Нет; при медицинских вопросах обратитесь к врачу. Этот сайт — учебный макет.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="price" className="border rounded-lg px-6">
              <AccordionTrigger className="text-left">
                Почему такая цена?
              </AccordionTrigger>
              <AccordionContent>
                Цена отражает индивидуальный подход и время специалиста. Есть рассрочка и разные пакеты.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="online" className="border rounded-lg px-6">
              <AccordionTrigger className="text-left">
                Работаете онлайн?
              </AccordionTrigger>
              <AccordionContent>
                Да, встречи проходят в удобном для вас формате — онлайн или очно.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Сравнение подходов</h2>
          
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-lg shadow-lg">
              <thead>
                <tr className="bg-gray-100">
                  <th className="p-4 text-left">Критерий</th>
                  <th className="p-4 text-center">Самостоятельно</th>
                  <th className="p-4 text-center bg-orange-50">Со мной</th>
                  <th className="p-4 text-center">Советы в сети</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="p-4 font-medium">Персональный подход</td>
                  <td className="p-4 text-center">❌</td>
                  <td className="p-4 text-center bg-orange-50">✅</td>
                  <td className="p-4 text-center">❌</td>
                </tr>
                <tr className="border-t bg-gray-50">
                  <td className="p-4 font-medium">Структурированный план</td>
                  <td className="p-4 text-center">⚠️</td>
                  <td className="p-4 text-center bg-orange-50">✅</td>
                  <td className="p-4 text-center">❌</td>
                </tr>
                <tr className="border-t">
                  <td className="p-4 font-medium">Поддержка в процессе</td>
                  <td className="p-4 text-center">❌</td>
                  <td className="p-4 text-center bg-orange-50">✅</td>
                  <td className="p-4 text-center">⚠️</td>
                </tr>
                <tr className="border-t bg-gray-50">
                  <td className="p-4 font-medium">Время на результат</td>
                  <td className="p-4 text-center">Долго</td>
                  <td className="p-4 text-center bg-orange-50">Быстрее</td>
                  <td className="p-4 text-center">Неясно</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Guarantee */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Гарантии</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="p-8 text-center">
                <Icon name="Heart" size={48} className="mx-auto mb-4 text-red-500" />
                <h3 className="font-bold mb-4">Гарантия уважения</h3>
                <p className="text-gray-600">
                  Уважительное отношение и прозрачные условия работы на каждой встрече.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-8 text-center">
                <Icon name="Gift" size={48} className="mx-auto mb-4 text-green-500" />
                <h3 className="font-bold mb-4">Гарантия полезности</h3>
                <p className="text-gray-600">
                  Если после первой сессии не почувствуете пользы — получите набор материалов для самостоятельной работы.
                </p>
              </CardContent>
            </Card>
          </div>
          
          <div className="mt-8 p-6 bg-yellow-50 border border-yellow-200 rounded-lg">
            <p className="text-sm text-gray-600">
              Без денежных гарантий и без обещаний результата — честно и прозрачно.
            </p>
          </div>
        </div>
      </section>

      {/* Lead Magnet Form */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Получить чек-лист бесплатно</h2>
          <p className="mb-8">PDF: 10 вопросов, чтобы прояснить запрос</p>
          
          <Card className="bg-white text-gray-900">
            <CardContent className="p-8">
              <div className="space-y-4">
                <div>
                  <input 
                    type="text" 
                    placeholder="Ваше имя" 
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
                <div>
                  <input 
                    type="email" 
                    placeholder="Email" 
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
                <div>
                  <input 
                    type="tel" 
                    placeholder="Телефон или мессенджер" 
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
                
                <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-3">
                  Получить чек-лист сейчас
                </Button>
              </div>
              
              <p className="text-xs text-gray-500 mt-4">
                Это не подписка-спам. Отписка одним кликом.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">Начните изменения уже сегодня</h3>
            <Button size="lg" className="bg-gradient-to-r from-orange-500 to-yellow-400 hover:from-orange-600 hover:to-yellow-500 mr-4">
              Проверить свободные слоты
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-gray-900">
              Начать с диагностической сессии
            </Button>
          </div>
          
          <Separator className="my-8" />
          
          <div className="text-center space-y-4">
            <div className="bg-red-100 text-red-800 p-4 rounded-lg max-w-2xl mx-auto">
              <p className="font-bold text-lg">
                ⚠️ Учебный пародийный макет. Не медицинская услуга. Результат не гарантируется.
              </p>
            </div>
            
            <div className="flex justify-center space-x-8 text-sm text-gray-400">
              <a href="#" className="hover:text-white">Политика конфиденциальности</a>
              <a href="#" className="hover:text-white">Контакты</a>
              <a href="#" className="hover:text-white">Условия использования</a>
            </div>
            
            <p className="text-xs text-gray-500">
              © 2024 Учебный проект. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;