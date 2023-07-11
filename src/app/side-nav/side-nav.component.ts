import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent {
 @Input() sideNavStatus: boolean = false;
menuList=[
  {id:'1',name:'Home', icon: 'fa-solid fa-house'},
 {id:'2',name:'Analytics', icon: 'fa-solid fa-chart-line'},
{id:'3',name:'Productos', icon: 'fa-solid fa-box'},
{id:'4',name:'Order', icon: 'fa-solid fa-cart-shopping'},
{id:'5',name:'Settings', icon: 'fa-solid fa-gear'},
 {id:'6',name:'Home', icon: 'fa-solid fa-house'},
{id:'7',name:'Analytics', icon: 'fa-solid fa-chart-line'},
{id:'8',name:'Productos', icon: 'fa-solid fa-box'},
{id:'9',name:'Order', icon: 'fa-solid fa-cart-shopping'},
{id:'10',name:'Settings', icon: 'fa-solid fa-gear'}]
}
