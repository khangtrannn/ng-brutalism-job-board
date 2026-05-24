import { Component, signal, viewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  NbAccordion,
  NbAccordionContent,
  NbAccordionItem,
  NbAccordionTrigger,
  NbAvatar,
  NbBadgeVariant,
  NbButton,
  NbCard,
  NbCardActions,
  NbCardContent,
  NbCardHeader,
  NbCheckbox,
  NbDialog,
  NbDialogActions,
  NbDialogClose,
  NbDialogContent,
  NbDialogDescription,
  NbDialogTitle,
  NbInput,
  NbInputGroup,
  NbInputPrefix,
  NbLabel,
  NbMarquee,
  NbMarqueeItem,
  NbSelect,
  NbSelectOption,
  NbTextarea,
  NbTitle,
} from '@ng-brutalism/ui';

interface Badge {
  label: string;
  variant: NbBadgeVariant;
  icon: 'clock' | 'globe' | 'lightning' | 'code';
}

interface Job {
  id: number;
  title: string;
  company: string;
  logo: string;
  avatar: string;
  recruiter: string;
  recruiterTitle: string;
  description: string;
  color: string;
  salary: string;
  salaryMeta: string;
  posted: string;
  badges: Badge[];
}

@Component({
  selector: 'app-root',
  imports: [
    FormsModule,
    NbTitle,
    NbButton,
    NbInput,
    NbInputGroup,
    NbInputPrefix,
    NbLabel,
    NbSelect,
    NbSelectOption,
    NbTextarea,
    NbCheckbox,
    NbCard,
    NbCardHeader,
    NbCardContent,
    NbCardActions,
    NbAvatar,
    NbMarquee,
    NbMarqueeItem,
    NbDialog,
    NbDialogTitle,
    NbDialogDescription,
    NbDialogContent,
    NbDialogActions,
    NbDialogClose,
    NbAccordion,
    NbAccordionItem,
    NbAccordionTrigger,
    NbAccordionContent,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  selectedJob = signal('');
  dialogRef = viewChild.required<NbDialog>('dialogRef');

  name = '';
  email = '';
  role: string | null = null;
  coverLetter = '';
  agreed = false;

  readonly jobs: Job[] = [
    {
      id: 1,
      title: 'Senior Angular Developer',
      company: 'Google',
      logo: 'https://www.google.com/images/branding/googleg/1x/googleg_standard_color_128dp.png',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Alex',
      recruiter: 'Alex Kim',
      recruiterTitle: 'ENGINEERING LEAD',
      description: 'Build world-class web experiences for billions of Google users worldwide.',
      color: '#99e8c8',
      salary: '$140K – $180K',
      salaryMeta: 'USD · YEARLY',
      posted: '1d ago',
      badges: [
        { label: 'Full-time', variant: 'success', icon: 'clock' },
        { label: 'Remote', variant: 'secondary', icon: 'globe' },
        { label: 'Urgent', variant: 'danger', icon: 'lightning' },
      ],
    },
    {
      id: 2,
      title: 'UI/UX Designer',
      company: 'Figma',
      logo: 'https://static.figma.com/app/icon/1/icon-192.png',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah',
      recruiter: 'Sarah Chen',
      recruiterTitle: 'DESIGN DIRECTOR',
      description: 'Shape the future of design tools used by millions of creators daily.',
      color: '#ff7eb6',
      salary: '$110K – $140K',
      salaryMeta: 'USD · YEARLY',
      posted: '3d ago',
      badges: [
        { label: 'Full-time', variant: 'success', icon: 'clock' },
        { label: 'Hybrid', variant: 'warning', icon: 'globe' },
      ],
    },
    {
      id: 3,
      title: 'Angular Library Maintainer',
      company: 'ng-brutalism',
      logo: 'https://ngbrutalism.khangtran.dev/logo.png',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Jordan',
      recruiter: 'Jordan Lee',
      recruiterTitle: 'OPEN SOURCE LEAD',
      description: 'Help shape the go-to neo-brutalist component library for Angular devs.',
      color: '#ffd24a',
      salary: 'Volunteer / Equity',
      salaryMeta: 'OPEN SOURCE',
      posted: 'Just posted',
      badges: [
        { label: 'Open Source', variant: 'default', icon: 'code' },
        { label: 'Remote', variant: 'secondary', icon: 'globe' },
      ],
    },
    {
      id: 4,
      title: 'Open Source Maintainer',
      company: 'GitHub',
      logo: 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Maya',
      recruiter: 'Maya Patel',
      recruiterTitle: 'REPOSITORY OWNER',
      description: 'Help improve developer experience for millions of developers worldwide.',
      color: '#b8a4ff',
      salary: '$90K – $120K',
      salaryMeta: 'USD · YEARLY',
      posted: '2d ago',
      badges: [
        { label: 'Part-time', variant: 'warning', icon: 'clock' },
        { label: 'Remote', variant: 'secondary', icon: 'globe' },
      ],
    },
  ];

  openDialog(title: string): void {
    this.selectedJob.set(title);
    this.name = '';
    this.email = '';
    this.role = null;
    this.coverLetter = '';
    this.agreed = false;
    this.dialogRef().open();
  }
}
