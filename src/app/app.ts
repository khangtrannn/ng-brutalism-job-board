import { Component, signal, viewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  NbAccordion,
  NbAccordionContent,
  NbAccordionItem,
  NbAccordionTrigger,
  NbAvatar,
  NbBadge,
  NbBadgeVariant,
  NbButton,
  NbCard,
  NbCardActions,
  NbCardContent,
  NbCardHeader,
  NbCardTitle,
  NbCheckbox,
  NbDialog,
  NbDialogActions,
  NbDialogClose,
  NbDialogContent,
  NbDialogDescription,
  NbDialogTitle,
  NbImageCard,
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
}

interface Job {
  id: number;
  title: string;
  company: string;
  logo: string;
  avatar: string;
  recruiter: string;
  color: string;
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
    NbCardTitle,
    NbCardContent,
    NbCardActions,
    NbImageCard,
    NbAvatar,
    NbBadge,
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
      color: '#99e8c8',
      badges: [
        { label: 'Full-time', variant: 'success' },
        { label: 'Remote', variant: 'secondary' },
        { label: 'Urgent', variant: 'danger' },
      ],
    },
    {
      id: 2,
      title: 'UI/UX Designer',
      company: 'Figma',
      logo: 'https://static.figma.com/app/icon/1/icon-192.png',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah',
      recruiter: 'Sarah Chen',
      color: '#ff7eb6',
      badges: [
        { label: 'Full-time', variant: 'success' },
        { label: 'Hybrid', variant: 'warning' },
      ],
    },
    {
      id: 3,
      title: 'DevOps Engineer',
      company: 'Vercel',
      logo: 'https://assets.vercel.com/image/upload/front/favicon/vercel/57x57.png',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Jordan',
      recruiter: 'Jordan Lee',
      color: '#ffd24a',
      badges: [
        { label: 'Contract', variant: 'default' },
        { label: 'Remote', variant: 'secondary' },
      ],
    },
    {
      id: 4,
      title: 'Open Source Maintainer',
      company: 'GitHub',
      logo: 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Maya',
      recruiter: 'Maya Patel',
      color: '#b8a4ff',
      badges: [
        { label: 'Part-time', variant: 'warning' },
        { label: 'Remote', variant: 'secondary' },
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
