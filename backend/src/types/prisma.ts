// Temporary types until Prisma client is generated

export enum Role {
  ADMIN = 'ADMIN',
  MEMBER = 'MEMBER',
  VOLUNTEER = 'VOLUNTEER',
}

export enum TaskStatus {
  PENDING = 'PENDING',
  DONE = 'DONE',
  CLOSED = 'CLOSED',
}

export enum AttendanceStatus {
  NOT_MARKED = 'NOT_MARKED',
  PRESENT = 'PRESENT',
}

export interface User {
  id: string;
  fullName: string;
  phone: string;
  email: string;
  password: string;
  role: Role;
  createdEvents?: Event[];
  registrations?: Registration[];
  taskAssignments?: TaskAssignment[];
  taskUpdates?: TaskUpdate[];
  notes?: EventNote[];
  tasks?: Task[];
  createdAt: Date;
  updatedAt: Date;
}

export interface Event {
  id: string;
  title: string;
  description?: string;
  startDate: Date;
  endDate?: Date;
  location?: string;
  createdById: string;
  createdBy?: User;
  registrations?: Registration[];
  tasks?: Task[];
  goals?: EventGoal[];
  notes?: EventNote[];
  inviteLinks?: EventInviteLink[];
  createdAt: Date;
  updatedAt: Date;
}

export interface EventInviteLink {
  id: string;
  token: string;
  expiresAt?: Date;
  eventId: string;
  event?: Event;
  createdAt: Date;
}

export interface Registration {
  id: string;
  ticketNumber: string;
  attendanceStatus: AttendanceStatus;
  eventId: string;
  event?: Event;
  userId: string;
  user?: User;
  registeredAt: Date;
}

export interface Task {
  id: string;
  title: string;
  description?: string;
  deadline?: Date;
  status: TaskStatus;
  eventId: string;
  event?: Event;
  createdById: string;
  createdBy?: User;
  assignments?: TaskAssignment[];
  updates?: TaskUpdate[];
  createdAt: Date;
  updatedAt: Date;
}

export interface TaskAssignment {
  id: string;
  taskId: string;
  task?: Task;
  userId: string;
  user?: User;
  assignedAt: Date;
}

export interface TaskUpdate {
  id: string;
  message: string;
  taskId: string;
  task?: Task;
  userId: string;
  user?: User;
  createdAt: Date;
}

export interface EventGoal {
  id: string;
  title: string;
  description?: string;
  eventId: string;
  event?: Event;
  createdAt: Date;
}

export interface EventNote {
  id: string;
  content: string;
  eventId: string;
  event?: Event;
  userId: string;
  user?: User;
  createdAt: Date;
}

export namespace Prisma {
  export interface UserCreateInput {
    fullName: string;
    phone: string;
    email: string;
    password: string;
    role: Role;
    createdEvents?: EventCreateInput[];
    registrations?: RegistrationCreateInput[];
    taskAssignments?: TaskAssignmentCreateInput[];
    taskUpdates?: TaskUpdateCreateInput[];
    notes?: EventNoteCreateInput[];
    tasks?: TaskCreateInput[];
  }

  export interface UserUpdateInput {
    fullName?: string;
    phone?: string;
    email?: string;
    password?: string;
    role?: Role;
  }

  export interface EventCreateInput {
    title: string;
    description?: string;
    startDate: Date;
    endDate?: Date;
    location?: string;
    createdBy: UserCreateInput;
    registrations?: RegistrationCreateInput[];
    tasks?: TaskCreateInput[];
    goals?: EventGoalCreateInput[];
    notes?: EventNoteCreateInput[];
    inviteLinks?: EventInviteLinkCreateInput[];
  }

  export interface EventUpdateInput {
    title?: string;
    description?: string;
    startDate?: Date;
    endDate?: Date;
    location?: string;
  }

  export interface EventInviteLinkCreateInput {
    token: string;
    expiresAt?: Date;
    event: EventCreateInput;
  }

  export interface EventInviteLinkUpdateInput {
    token?: string;
    expiresAt?: Date;
  }

  export interface RegistrationCreateInput {
    ticketNumber: string;
    attendanceStatus?: AttendanceStatus;
    event: EventCreateInput;
    user: UserCreateInput;
  }

  export interface RegistrationUpdateInput {
    ticketNumber?: string;
    attendanceStatus?: AttendanceStatus;
  }

  export interface TaskCreateInput {
    title: string;
    description?: string;
    deadline?: Date;
    status?: TaskStatus;
    event: EventCreateInput;
    createdBy: UserCreateInput;
    assignments?: TaskAssignmentCreateInput[];
    updates?: TaskUpdateCreateInput[];
  }

  export interface TaskUpdateInput {
    title?: string;
    description?: string;
    deadline?: Date;
    status?: TaskStatus;
  }

  export interface TaskAssignmentCreateInput {
    task: TaskCreateInput;
    user: UserCreateInput;
  }

  export interface TaskUpdateCreateInput {
    message: string;
    task: TaskCreateInput;
    user: UserCreateInput;
  }

  export interface EventGoalCreateInput {
    title: string;
    description?: string;
    event: EventCreateInput;
  }

  export interface EventNoteCreateInput {
    content: string;
    event: EventCreateInput;
    user: UserCreateInput;
  }

  export interface EventInviteLinkCreateInput {
    token: string;
    expiresAt?: Date;
    event: EventCreateInput;
  }

  export interface EventInviteLinkUpdateInput {
    token?: string;
    expiresAt?: Date;
  }
}
