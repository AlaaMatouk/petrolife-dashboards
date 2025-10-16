# Quick Layout Guide

## 🎯 What Changed?

The layout is now **static and automatic** for all pages! You no longer need to wrap every component with `<Layout>` or `<LayoutSimple>`.

## ✨ Before vs After

### ❌ OLD WAY (Don't do this anymore)

```tsx
import { LayoutSimple } from "../../components/shared/Layout/LayoutSimple";
import { navigationMenuData, userInfo } from "../../constants/data";

export const MyPage = (): JSX.Element => {
  return (
    <LayoutSimple
      headerProps={{
        title: "صفحتي",
        titleIconSrc: <MyIcon />,
        showSearch: false,
      }}
      sidebarProps={{
        sections: navigationMenuData.sections,
        topItems: navigationMenuData.topItems,
        bottomItems: navigationMenuData.bottomItems,
        userInfo: userInfo,
      }}
    >
      <div className="flex flex-col w-full items-start gap-5">
        {/* Your content here */}
      </div>
    </LayoutSimple>
  );
};
```

### ✅ NEW WAY (Do this instead)

```tsx
export const MyPage = (): JSX.Element => {
  return (
    <div className="flex flex-col w-full items-start gap-5">
      {/* Your content here - Layout is automatic! */}
    </div>
  );
};
```

## 📝 How to Add a New Page

### Step 1: Add Page Config
Open `src/components/shared/Layout/LayoutWrapper.tsx` and add your page:

```tsx
const PAGE_CONFIGS: Record<string, PageConfig> = {
  '/my-new-page': {
    title: 'عنوان صفحتي',                    // Page title in Arabic
    titleIcon: <MyIcon className="w-5 h-5" />, // Icon component
    showSearch: false,                          // Enable/disable search
    searchPlaceholder: 'بحث...',               // Optional: search placeholder
  },
  // ... other pages
};
```

### Step 2: Create Your Component
Just create a simple component - no Layout needed!

```tsx
// src/screens/MyNewPage/MyNewPage.tsx
export const MyNewPage = (): JSX.Element => {
  return (
    <div>
      <h1>مرحباً!</h1>
      {/* Your content */}
    </div>
  );
};
```

### Step 3: Add Route
Add to `src/routes/index.tsx` inside the `<LayoutWrapper />`:

```tsx
<Route element={<LayoutWrapper />}>
  <Route path="/my-new-page" element={<MyNewPage />} />
  {/* other routes */}
</Route>
```

## 🔍 Using Search Functionality

If your page needs search, use the `useLayoutContext` hook:

```tsx
import { useLayoutContext } from "../../hooks/useLayoutContext";

export const SearchablePage = (): JSX.Element => {
  const { searchQuery } = useLayoutContext();

  return (
    <div>
      <MyDataTable searchQuery={searchQuery} />
    </div>
  );
};
```

Don't forget to enable search in your page config:

```tsx
{
  showSearch: true,
  searchPlaceholder: 'بحث بالاسم...',
}
```

## 🎨 Hover Effects

The sidebar tabs now have improved hover effects:
- **Hover**: Purple tint background with light purple border
- **Active**: Purple border with purple text
- **Smooth**: Transitions on all state changes

No code changes needed - it's automatic! ✨

## 🚀 Key Benefits

| Before | After |
|--------|-------|
| 15-20 lines of boilerplate per page | 0 lines of boilerplate |
| Manual layout management | Automatic layout |
| Repeated imports | Clean imports |
| Inconsistent styling | Consistent styling |
| Hard to maintain | Easy to maintain |

## 📁 File Structure

```
src/
├── components/
│   └── shared/
│       └── Layout/
│           ├── LayoutWrapper.tsx      ← 🆕 Central layout manager
│           ├── Layout.tsx             ← Still available if needed
│           └── LayoutSimple.tsx       ← Still available if needed
├── hooks/
│   └── useLayoutContext.ts            ← 🆕 Access layout context
└── routes/
    └── index.tsx                      ← Updated with LayoutWrapper
```

## 🔧 Common Tasks

### Changing a Page Title
Edit `PAGE_CONFIGS` in `LayoutWrapper.tsx`:

```tsx
'/my-page': {
  title: 'العنوان الجديد', // New title
  // ...
}
```

### Adding Search to Existing Page
1. Set `showSearch: true` in `PAGE_CONFIGS`
2. Use `const { searchQuery } = useLayoutContext()` in your component
3. Pass `searchQuery` to your data components

### Removing a Page
1. Remove route from `routes/index.tsx`
2. Remove config from `PAGE_CONFIGS` (optional cleanup)
3. Delete component files

## ❓ FAQ

**Q: Can I still use the old Layout component?**  
A: Yes! It still exists, but the new way is recommended for consistency.

**Q: What about pages without layout (like login)?**  
A: Place them outside the `<LayoutWrapper />` in routes.

**Q: How do I customize the header for a specific page?**  
A: Edit the page config in `PAGE_CONFIGS` in `LayoutWrapper.tsx`.

**Q: Can I have page-specific actions in the header?**  
A: Not yet, but this can be added as a future enhancement.

## 🎯 Quick Checklist

When creating a new page:

- [ ] Add page config to `LayoutWrapper.tsx`
- [ ] Create component without Layout wrapper
- [ ] Add route inside `<LayoutWrapper />` 
- [ ] Test navigation and layout rendering
- [ ] Test search if enabled

## 📞 Need Help?

If something doesn't work:
1. Check the page config in `LayoutWrapper.tsx`
2. Verify the route is inside `<LayoutWrapper />`
3. Check browser console for errors
4. Refer to existing pages for examples

---

**Happy Coding! 🚀**

