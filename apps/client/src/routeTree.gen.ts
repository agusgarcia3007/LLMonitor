/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as LandingRouteImport } from './routes/_landing/route'
import { Route as DashboardRouteImport } from './routes/_dashboard/route'
import { Route as AuthRouteImport } from './routes/_auth/route'
import { Route as IndexImport } from './routes/index'
import { Route as LandingAboutImport } from './routes/_landing/about'
import { Route as DashboardUsersImport } from './routes/_dashboard/users'
import { Route as DashboardProjectsImport } from './routes/_dashboard/projects'
import { Route as DashboardLogsImport } from './routes/_dashboard/logs'
import { Route as DashboardExperimentsImport } from './routes/_dashboard/experiments'
import { Route as DashboardDashboardImport } from './routes/_dashboard/dashboard'
import { Route as DashboardCostAnalysisImport } from './routes/_dashboard/cost-analysis'
import { Route as DashboardApiKeysImport } from './routes/_dashboard/api-keys'
import { Route as DashboardAlertsImport } from './routes/_dashboard/alerts'
import { Route as AuthSignupImport } from './routes/_auth/signup'
import { Route as AuthResetPasswordImport } from './routes/_auth/reset-password'
import { Route as AuthLoginImport } from './routes/_auth/login'
import { Route as AuthForgotPasswordImport } from './routes/_auth/forgot-password'
import { Route as AuthAcceptInvitationImport } from './routes/_auth/accept-invitation'
import { Route as DashboardProjectsIndexImport } from './routes/_dashboard/projects/index'
import { Route as DashboardProjectsIdImport } from './routes/_dashboard/projects/$id'

// Create/Update Routes

const LandingRouteRoute = LandingRouteImport.update({
  id: '/_landing',
  getParentRoute: () => rootRoute,
} as any)

const DashboardRouteRoute = DashboardRouteImport.update({
  id: '/_dashboard',
  getParentRoute: () => rootRoute,
} as any)

const AuthRouteRoute = AuthRouteImport.update({
  id: '/_auth',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const LandingAboutRoute = LandingAboutImport.update({
  id: '/about',
  path: '/about',
  getParentRoute: () => LandingRouteRoute,
} as any)

const DashboardUsersRoute = DashboardUsersImport.update({
  id: '/users',
  path: '/users',
  getParentRoute: () => DashboardRouteRoute,
} as any)

const DashboardProjectsRoute = DashboardProjectsImport.update({
  id: '/projects',
  path: '/projects',
  getParentRoute: () => DashboardRouteRoute,
} as any)

const DashboardLogsRoute = DashboardLogsImport.update({
  id: '/logs',
  path: '/logs',
  getParentRoute: () => DashboardRouteRoute,
} as any)

const DashboardExperimentsRoute = DashboardExperimentsImport.update({
  id: '/experiments',
  path: '/experiments',
  getParentRoute: () => DashboardRouteRoute,
} as any)

const DashboardDashboardRoute = DashboardDashboardImport.update({
  id: '/dashboard',
  path: '/dashboard',
  getParentRoute: () => DashboardRouteRoute,
} as any)

const DashboardCostAnalysisRoute = DashboardCostAnalysisImport.update({
  id: '/cost-analysis',
  path: '/cost-analysis',
  getParentRoute: () => DashboardRouteRoute,
} as any)

const DashboardApiKeysRoute = DashboardApiKeysImport.update({
  id: '/api-keys',
  path: '/api-keys',
  getParentRoute: () => DashboardRouteRoute,
} as any)

const DashboardAlertsRoute = DashboardAlertsImport.update({
  id: '/alerts',
  path: '/alerts',
  getParentRoute: () => DashboardRouteRoute,
} as any)

const AuthSignupRoute = AuthSignupImport.update({
  id: '/signup',
  path: '/signup',
  getParentRoute: () => AuthRouteRoute,
} as any)

const AuthResetPasswordRoute = AuthResetPasswordImport.update({
  id: '/reset-password',
  path: '/reset-password',
  getParentRoute: () => AuthRouteRoute,
} as any)

const AuthLoginRoute = AuthLoginImport.update({
  id: '/login',
  path: '/login',
  getParentRoute: () => AuthRouteRoute,
} as any)

const AuthForgotPasswordRoute = AuthForgotPasswordImport.update({
  id: '/forgot-password',
  path: '/forgot-password',
  getParentRoute: () => AuthRouteRoute,
} as any)

const AuthAcceptInvitationRoute = AuthAcceptInvitationImport.update({
  id: '/accept-invitation',
  path: '/accept-invitation',
  getParentRoute: () => AuthRouteRoute,
} as any)

const DashboardProjectsIndexRoute = DashboardProjectsIndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => DashboardProjectsRoute,
} as any)

const DashboardProjectsIdRoute = DashboardProjectsIdImport.update({
  id: '/$id',
  path: '/$id',
  getParentRoute: () => DashboardProjectsRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/_auth': {
      id: '/_auth'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof AuthRouteImport
      parentRoute: typeof rootRoute
    }
    '/_dashboard': {
      id: '/_dashboard'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof DashboardRouteImport
      parentRoute: typeof rootRoute
    }
    '/_landing': {
      id: '/_landing'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof LandingRouteImport
      parentRoute: typeof rootRoute
    }
    '/_auth/accept-invitation': {
      id: '/_auth/accept-invitation'
      path: '/accept-invitation'
      fullPath: '/accept-invitation'
      preLoaderRoute: typeof AuthAcceptInvitationImport
      parentRoute: typeof AuthRouteImport
    }
    '/_auth/forgot-password': {
      id: '/_auth/forgot-password'
      path: '/forgot-password'
      fullPath: '/forgot-password'
      preLoaderRoute: typeof AuthForgotPasswordImport
      parentRoute: typeof AuthRouteImport
    }
    '/_auth/login': {
      id: '/_auth/login'
      path: '/login'
      fullPath: '/login'
      preLoaderRoute: typeof AuthLoginImport
      parentRoute: typeof AuthRouteImport
    }
    '/_auth/reset-password': {
      id: '/_auth/reset-password'
      path: '/reset-password'
      fullPath: '/reset-password'
      preLoaderRoute: typeof AuthResetPasswordImport
      parentRoute: typeof AuthRouteImport
    }
    '/_auth/signup': {
      id: '/_auth/signup'
      path: '/signup'
      fullPath: '/signup'
      preLoaderRoute: typeof AuthSignupImport
      parentRoute: typeof AuthRouteImport
    }
    '/_dashboard/alerts': {
      id: '/_dashboard/alerts'
      path: '/alerts'
      fullPath: '/alerts'
      preLoaderRoute: typeof DashboardAlertsImport
      parentRoute: typeof DashboardRouteImport
    }
    '/_dashboard/api-keys': {
      id: '/_dashboard/api-keys'
      path: '/api-keys'
      fullPath: '/api-keys'
      preLoaderRoute: typeof DashboardApiKeysImport
      parentRoute: typeof DashboardRouteImport
    }
    '/_dashboard/cost-analysis': {
      id: '/_dashboard/cost-analysis'
      path: '/cost-analysis'
      fullPath: '/cost-analysis'
      preLoaderRoute: typeof DashboardCostAnalysisImport
      parentRoute: typeof DashboardRouteImport
    }
    '/_dashboard/dashboard': {
      id: '/_dashboard/dashboard'
      path: '/dashboard'
      fullPath: '/dashboard'
      preLoaderRoute: typeof DashboardDashboardImport
      parentRoute: typeof DashboardRouteImport
    }
    '/_dashboard/experiments': {
      id: '/_dashboard/experiments'
      path: '/experiments'
      fullPath: '/experiments'
      preLoaderRoute: typeof DashboardExperimentsImport
      parentRoute: typeof DashboardRouteImport
    }
    '/_dashboard/logs': {
      id: '/_dashboard/logs'
      path: '/logs'
      fullPath: '/logs'
      preLoaderRoute: typeof DashboardLogsImport
      parentRoute: typeof DashboardRouteImport
    }
    '/_dashboard/projects': {
      id: '/_dashboard/projects'
      path: '/projects'
      fullPath: '/projects'
      preLoaderRoute: typeof DashboardProjectsImport
      parentRoute: typeof DashboardRouteImport
    }
    '/_dashboard/users': {
      id: '/_dashboard/users'
      path: '/users'
      fullPath: '/users'
      preLoaderRoute: typeof DashboardUsersImport
      parentRoute: typeof DashboardRouteImport
    }
    '/_landing/about': {
      id: '/_landing/about'
      path: '/about'
      fullPath: '/about'
      preLoaderRoute: typeof LandingAboutImport
      parentRoute: typeof LandingRouteImport
    }
    '/_dashboard/projects/$id': {
      id: '/_dashboard/projects/$id'
      path: '/$id'
      fullPath: '/projects/$id'
      preLoaderRoute: typeof DashboardProjectsIdImport
      parentRoute: typeof DashboardProjectsImport
    }
    '/_dashboard/projects/': {
      id: '/_dashboard/projects/'
      path: '/'
      fullPath: '/projects/'
      preLoaderRoute: typeof DashboardProjectsIndexImport
      parentRoute: typeof DashboardProjectsImport
    }
  }
}

// Create and export the route tree

interface AuthRouteRouteChildren {
  AuthAcceptInvitationRoute: typeof AuthAcceptInvitationRoute
  AuthForgotPasswordRoute: typeof AuthForgotPasswordRoute
  AuthLoginRoute: typeof AuthLoginRoute
  AuthResetPasswordRoute: typeof AuthResetPasswordRoute
  AuthSignupRoute: typeof AuthSignupRoute
}

const AuthRouteRouteChildren: AuthRouteRouteChildren = {
  AuthAcceptInvitationRoute: AuthAcceptInvitationRoute,
  AuthForgotPasswordRoute: AuthForgotPasswordRoute,
  AuthLoginRoute: AuthLoginRoute,
  AuthResetPasswordRoute: AuthResetPasswordRoute,
  AuthSignupRoute: AuthSignupRoute,
}

const AuthRouteRouteWithChildren = AuthRouteRoute._addFileChildren(
  AuthRouteRouteChildren,
)

interface DashboardProjectsRouteChildren {
  DashboardProjectsIdRoute: typeof DashboardProjectsIdRoute
  DashboardProjectsIndexRoute: typeof DashboardProjectsIndexRoute
}

const DashboardProjectsRouteChildren: DashboardProjectsRouteChildren = {
  DashboardProjectsIdRoute: DashboardProjectsIdRoute,
  DashboardProjectsIndexRoute: DashboardProjectsIndexRoute,
}

const DashboardProjectsRouteWithChildren =
  DashboardProjectsRoute._addFileChildren(DashboardProjectsRouteChildren)

interface DashboardRouteRouteChildren {
  DashboardAlertsRoute: typeof DashboardAlertsRoute
  DashboardApiKeysRoute: typeof DashboardApiKeysRoute
  DashboardCostAnalysisRoute: typeof DashboardCostAnalysisRoute
  DashboardDashboardRoute: typeof DashboardDashboardRoute
  DashboardExperimentsRoute: typeof DashboardExperimentsRoute
  DashboardLogsRoute: typeof DashboardLogsRoute
  DashboardProjectsRoute: typeof DashboardProjectsRouteWithChildren
  DashboardUsersRoute: typeof DashboardUsersRoute
}

const DashboardRouteRouteChildren: DashboardRouteRouteChildren = {
  DashboardAlertsRoute: DashboardAlertsRoute,
  DashboardApiKeysRoute: DashboardApiKeysRoute,
  DashboardCostAnalysisRoute: DashboardCostAnalysisRoute,
  DashboardDashboardRoute: DashboardDashboardRoute,
  DashboardExperimentsRoute: DashboardExperimentsRoute,
  DashboardLogsRoute: DashboardLogsRoute,
  DashboardProjectsRoute: DashboardProjectsRouteWithChildren,
  DashboardUsersRoute: DashboardUsersRoute,
}

const DashboardRouteRouteWithChildren = DashboardRouteRoute._addFileChildren(
  DashboardRouteRouteChildren,
)

interface LandingRouteRouteChildren {
  LandingAboutRoute: typeof LandingAboutRoute
}

const LandingRouteRouteChildren: LandingRouteRouteChildren = {
  LandingAboutRoute: LandingAboutRoute,
}

const LandingRouteRouteWithChildren = LandingRouteRoute._addFileChildren(
  LandingRouteRouteChildren,
)

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '': typeof LandingRouteRouteWithChildren
  '/accept-invitation': typeof AuthAcceptInvitationRoute
  '/forgot-password': typeof AuthForgotPasswordRoute
  '/login': typeof AuthLoginRoute
  '/reset-password': typeof AuthResetPasswordRoute
  '/signup': typeof AuthSignupRoute
  '/alerts': typeof DashboardAlertsRoute
  '/api-keys': typeof DashboardApiKeysRoute
  '/cost-analysis': typeof DashboardCostAnalysisRoute
  '/dashboard': typeof DashboardDashboardRoute
  '/experiments': typeof DashboardExperimentsRoute
  '/logs': typeof DashboardLogsRoute
  '/projects': typeof DashboardProjectsRouteWithChildren
  '/users': typeof DashboardUsersRoute
  '/about': typeof LandingAboutRoute
  '/projects/$id': typeof DashboardProjectsIdRoute
  '/projects/': typeof DashboardProjectsIndexRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '': typeof LandingRouteRouteWithChildren
  '/accept-invitation': typeof AuthAcceptInvitationRoute
  '/forgot-password': typeof AuthForgotPasswordRoute
  '/login': typeof AuthLoginRoute
  '/reset-password': typeof AuthResetPasswordRoute
  '/signup': typeof AuthSignupRoute
  '/alerts': typeof DashboardAlertsRoute
  '/api-keys': typeof DashboardApiKeysRoute
  '/cost-analysis': typeof DashboardCostAnalysisRoute
  '/dashboard': typeof DashboardDashboardRoute
  '/experiments': typeof DashboardExperimentsRoute
  '/logs': typeof DashboardLogsRoute
  '/users': typeof DashboardUsersRoute
  '/about': typeof LandingAboutRoute
  '/projects/$id': typeof DashboardProjectsIdRoute
  '/projects': typeof DashboardProjectsIndexRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/_auth': typeof AuthRouteRouteWithChildren
  '/_dashboard': typeof DashboardRouteRouteWithChildren
  '/_landing': typeof LandingRouteRouteWithChildren
  '/_auth/accept-invitation': typeof AuthAcceptInvitationRoute
  '/_auth/forgot-password': typeof AuthForgotPasswordRoute
  '/_auth/login': typeof AuthLoginRoute
  '/_auth/reset-password': typeof AuthResetPasswordRoute
  '/_auth/signup': typeof AuthSignupRoute
  '/_dashboard/alerts': typeof DashboardAlertsRoute
  '/_dashboard/api-keys': typeof DashboardApiKeysRoute
  '/_dashboard/cost-analysis': typeof DashboardCostAnalysisRoute
  '/_dashboard/dashboard': typeof DashboardDashboardRoute
  '/_dashboard/experiments': typeof DashboardExperimentsRoute
  '/_dashboard/logs': typeof DashboardLogsRoute
  '/_dashboard/projects': typeof DashboardProjectsRouteWithChildren
  '/_dashboard/users': typeof DashboardUsersRoute
  '/_landing/about': typeof LandingAboutRoute
  '/_dashboard/projects/$id': typeof DashboardProjectsIdRoute
  '/_dashboard/projects/': typeof DashboardProjectsIndexRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
    | ''
    | '/accept-invitation'
    | '/forgot-password'
    | '/login'
    | '/reset-password'
    | '/signup'
    | '/alerts'
    | '/api-keys'
    | '/cost-analysis'
    | '/dashboard'
    | '/experiments'
    | '/logs'
    | '/projects'
    | '/users'
    | '/about'
    | '/projects/$id'
    | '/projects/'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/'
    | ''
    | '/accept-invitation'
    | '/forgot-password'
    | '/login'
    | '/reset-password'
    | '/signup'
    | '/alerts'
    | '/api-keys'
    | '/cost-analysis'
    | '/dashboard'
    | '/experiments'
    | '/logs'
    | '/users'
    | '/about'
    | '/projects/$id'
    | '/projects'
  id:
    | '__root__'
    | '/'
    | '/_auth'
    | '/_dashboard'
    | '/_landing'
    | '/_auth/accept-invitation'
    | '/_auth/forgot-password'
    | '/_auth/login'
    | '/_auth/reset-password'
    | '/_auth/signup'
    | '/_dashboard/alerts'
    | '/_dashboard/api-keys'
    | '/_dashboard/cost-analysis'
    | '/_dashboard/dashboard'
    | '/_dashboard/experiments'
    | '/_dashboard/logs'
    | '/_dashboard/projects'
    | '/_dashboard/users'
    | '/_landing/about'
    | '/_dashboard/projects/$id'
    | '/_dashboard/projects/'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  AuthRouteRoute: typeof AuthRouteRouteWithChildren
  DashboardRouteRoute: typeof DashboardRouteRouteWithChildren
  LandingRouteRoute: typeof LandingRouteRouteWithChildren
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  AuthRouteRoute: AuthRouteRouteWithChildren,
  DashboardRouteRoute: DashboardRouteRouteWithChildren,
  LandingRouteRoute: LandingRouteRouteWithChildren,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/_auth",
        "/_dashboard",
        "/_landing"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/_auth": {
      "filePath": "_auth/route.tsx",
      "children": [
        "/_auth/accept-invitation",
        "/_auth/forgot-password",
        "/_auth/login",
        "/_auth/reset-password",
        "/_auth/signup"
      ]
    },
    "/_dashboard": {
      "filePath": "_dashboard/route.tsx",
      "children": [
        "/_dashboard/alerts",
        "/_dashboard/api-keys",
        "/_dashboard/cost-analysis",
        "/_dashboard/dashboard",
        "/_dashboard/experiments",
        "/_dashboard/logs",
        "/_dashboard/projects",
        "/_dashboard/users"
      ]
    },
    "/_landing": {
      "filePath": "_landing/route.tsx",
      "children": [
        "/_landing/about"
      ]
    },
    "/_auth/accept-invitation": {
      "filePath": "_auth/accept-invitation.tsx",
      "parent": "/_auth"
    },
    "/_auth/forgot-password": {
      "filePath": "_auth/forgot-password.tsx",
      "parent": "/_auth"
    },
    "/_auth/login": {
      "filePath": "_auth/login.tsx",
      "parent": "/_auth"
    },
    "/_auth/reset-password": {
      "filePath": "_auth/reset-password.tsx",
      "parent": "/_auth"
    },
    "/_auth/signup": {
      "filePath": "_auth/signup.tsx",
      "parent": "/_auth"
    },
    "/_dashboard/alerts": {
      "filePath": "_dashboard/alerts.tsx",
      "parent": "/_dashboard"
    },
    "/_dashboard/api-keys": {
      "filePath": "_dashboard/api-keys.tsx",
      "parent": "/_dashboard"
    },
    "/_dashboard/cost-analysis": {
      "filePath": "_dashboard/cost-analysis.tsx",
      "parent": "/_dashboard"
    },
    "/_dashboard/dashboard": {
      "filePath": "_dashboard/dashboard.tsx",
      "parent": "/_dashboard"
    },
    "/_dashboard/experiments": {
      "filePath": "_dashboard/experiments.tsx",
      "parent": "/_dashboard"
    },
    "/_dashboard/logs": {
      "filePath": "_dashboard/logs.tsx",
      "parent": "/_dashboard"
    },
    "/_dashboard/projects": {
      "filePath": "_dashboard/projects.tsx",
      "parent": "/_dashboard",
      "children": [
        "/_dashboard/projects/$id",
        "/_dashboard/projects/"
      ]
    },
    "/_dashboard/users": {
      "filePath": "_dashboard/users.tsx",
      "parent": "/_dashboard"
    },
    "/_landing/about": {
      "filePath": "_landing/about.tsx",
      "parent": "/_landing"
    },
    "/_dashboard/projects/$id": {
      "filePath": "_dashboard/projects/$id.tsx",
      "parent": "/_dashboard/projects"
    },
    "/_dashboard/projects/": {
      "filePath": "_dashboard/projects/index.tsx",
      "parent": "/_dashboard/projects"
    }
  }
}
ROUTE_MANIFEST_END */
