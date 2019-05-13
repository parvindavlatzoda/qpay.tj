import React from 'react';
import Card from '../components/Card';

export default class Payments extends React.Component {
  render() {
    let mobilIcon = <svg class="service-icon" width="64" height="64" viewBox="0 0 32 32"><path class="payment-menu-nav-item-icon-path-61" fill-rule="nonzero" d="M11 0h10a4 4 0 0 1 4 4v20a4 4 0 0 1-4 4H11a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4zm0 2a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H11zm5 22.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"></path></svg>;
    let fineIcon = <svg class="service-icon" width="64" height="64" viewBox="0 0 32 32"><path class="payment-menu-nav-item-icon-path-61" fill-rule="nonzero" d="M26.987 19.36C26.707 23.35 21.807 27 16 27c-5.785 0-10.669-3.621-10.984-7.593C2.42 16.55 2 15.208 2 11a1 1 0 0 1 1-1c3.168 0 5.336-.84 6.734-2.213.473-.465.822-.96 1.064-1.45.139-.279.208-.48.228-.566A1 1 0 0 1 12 5h8a1 1 0 0 1 .974.771c.02.086.09.287.228.566.242.49.59.985 1.064 1.45C23.664 9.16 25.832 10 29 10a1 1 0 0 1 1 1c0 4.188-.42 5.54-3.013 8.36zM7.155 20c.782 2.566 4.442 5 8.845 5 4.403 0 8.063-2.434 8.845-5H7.155zm20.837-8.027c-3.165-.173-5.513-1.173-7.128-2.76-.78-.766-1.282-1.543-1.575-2.213H12.71c-.293.67-.795 1.447-1.575 2.213C9.52 10.8 7.173 11.8 4.008 11.973c.057 2.91.452 3.847 2.432 6.027H25.52c2.013-2.182 2.413-3.115 2.47-6.027zM16 9.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3z"></path></svg>;
    let utilitiesIcon = <svg class="service-icon" width="64" height="64" viewBox="0 0 32 32"><path class="payment-menu-nav-item-icon-path-61" fill-rule="nonzero" d="M7.04 8.28A1 1 0 0 1 7 8V4a1 1 0 1 1 2 0v2.854l4.06-2.952a5 5 0 0 1 5.88 0l7 5.091A5 5 0 0 1 28 13.037V22a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5v-8.963a5 5 0 0 1 2.06-4.044l.98-.713zM23 25a3 3 0 0 0 3-3v-8.963a3 3 0 0 0-1.235-2.426l-7-5.091a3 3 0 0 0-3.53 0l-7 5.09A3 3 0 0 0 6 13.038V22a3 3 0 0 0 3 3h14z"></path></svg>;
    let internetIcon = <svg class="service-icon" width="64" height="64" viewBox="0 0 32 32"><path class="payment-menu-nav-item-icon-path-61" fill-rule="nonzero" d="M3.74 12.505a1 1 0 0 1-1.48-1.345c7.18-7.903 19.172-8.246 26.755-.754l.706.734a1 1 0 1 1-1.442 1.386l-.352-.366-.335-.349c-6.755-6.674-17.436-6.369-23.852.694zm3.946 4.277a1 1 0 0 1-1.512-1.31c4.897-5.655 13.312-6.077 18.694-.991.348.301.692.66.982 1.02a1 1 0 1 1-1.56 1.252 6.227 6.227 0 0 0-.764-.79c-4.586-4.332-11.688-3.976-15.84.819zm4.279 4.55a1 1 0 0 1-1.604-1.194c2.404-3.23 6.882-3.836 9.982-1.344.41.32.684.614 1.26 1.297a1 1 0 0 1-1.53 1.288c-.484-.573-.698-.803-.97-1.016-2.224-1.788-5.406-1.357-7.138.97zM16 23.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3z"></path></svg>;
    let gamesIcon = <svg class="service-icon" width="64" height="64" viewBox="0 0 32 32"><path class="payment-menu-nav-item-icon-path-61" fill-rule="nonzero" d="M26.477 22.016a1 1 0 0 1 .178 1.337c-3.252 4.669-9.19 6.678-14.63 4.953C6.56 26.574 2.93 21.647 3 15.99c.071-5.714 3.878-10.804 9.331-12.386 5.483-1.591 11.368.564 14.503 5.311a1 1 0 0 1-.214 1.335l-7.288 5.774 7.144 5.993zm-2.015.92l-7.354-6.169a1 1 0 0 1 .022-1.55l7.5-5.943c-2.75-3.493-7.394-5.012-11.74-3.75C8.288 6.857 5.06 11.173 5 16.013c-.059 4.77 2.997 8.917 7.63 10.386a11.041 11.041 0 0 0 11.832-3.464zM18 10.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"></path></svg>;
    let bankingIcon = <svg class="service-icon" width="64" height="64" viewBox="0 0 32 32"><path class="payment-menu-nav-item-icon-path-61" fill-rule="nonzero" d="M28 10.046V25h-2V11h-5v14h-2V11h-6v14h-2V11H6v14H4V10.046a.97.97 0 0 1 .521-.924l11-6a1 1 0 0 1 .958 0l11 6a.97.97 0 0 1 .521.924zM23.078 9L16 5.14 8.922 9h14.156zM29 27H3c-1.333 0-1.333-2 0-2h26c1.333 0 1.333 2 0 2z"></path></svg>;
    
    return <div>
      <h2>Платежи и переводы</h2>
      <div className='cards'>
        <Card title='Сотовая связь' icon={mobilIcon} />
        <Card title='Госуслуги и штрафы' icon={fineIcon} />
        <Card title='Услуги ЖКХ' icon={utilitiesIcon} />
        <Card title='Интернет и ТВ' icon={internetIcon} />
        <Card title='Игры и развлечения' icon={gamesIcon} />
        <Card title='Банковские услуги' icon={bankingIcon} />
      </div>
    </div>
  }
}