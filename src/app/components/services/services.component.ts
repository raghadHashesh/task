import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {
  services=[]=[{
    title:'HR recruiting',
    description:`At Msder, we are proud to say that we do things differently. We are specialized in HR
    reruitment,
    handlingthe entire recruiting process from start to finish.`
  },
  {
    title:'PROCUREMENT AND PURCHASING',
    description:`we concentrate on the strategic process of our services like planing.researching etc.At the
    same time the purchasing process is focused on how our services are acquired and ordered.`
  },
  {
    title:'GOVERNMENTAL RELATIONS',
    description:`Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet.`
  },
  {
    title:'CALL CENTER',
    description:`At Msader we handle all HR operations from outsourcing to inhouse team building.catering to
    clients of every size and scope.`
  },
  {
    title:'DOCUMENT MANAGMENT AND ARCHIVING',
    description:`Records and information are the lifeblood of any company So we are here to responsibly handle
    and safeguard these valuable assets for your enterprise.`
  },

]

}
