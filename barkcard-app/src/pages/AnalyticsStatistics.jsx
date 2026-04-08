import { useState } from 'react';

const periodAnalytics = {
  Daily: {
    summary: {
      totalRevenue: 12450,
      revenueChange: '+12.5% from yesterday',
      averageOrder: 8.45,
      averageLabel: 'Stable per student capita',
      itemsSold: 1472,
      itemsChange: '+4% vs target'
    },
    lineChart: {
      title: 'Daily Sales Revenue',
      labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      points: [180, 160, 100, 140, 90, 60, 80],
      peakText: 'Peak: P542.50'
    },
    distribution: { completed: 82, pending: 12, canceled: 6 },
    topItems: [
      { name: 'Artisan Grilled Chicken Wrap', units: 342, width: 85, opacity: 'opacity-100', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCXZa1n0wNpoeYkH-mURzTD7v1ChXukfQrlQmuZ9eH_oUmBdi1VAK_8rubTNNfODWvKFcouZBWR6deLFjxpV0rQAoEuzsA6d0zxbiw_1R-VZMwECI1rmWTdAYqcdyKxZSTD2D6wwUWGOieTg-69CXrKljc2VuQ8KdWkTuPDZ1NE380ymiyR5N4ejs1GecdNAleFvFZnitlPJ9PUSbppQmu6JNrFikEmaGFzx_4ekXmCkzXJPAbzYHoly98og4QH3JUSxTVMiHq_5ltk' },
      { name: 'Superfood Quinoa Bowl', units: 289, width: 72, opacity: 'opacity-80', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB4FwAobqUSIciRUbXUs5i63OTgplNYWWSHRDzXmnvxeLJotk96dxQvWVrqyxqAgJ1Xuy-9j6KPbBRe7iW-BvStGGT1YuBnuvooqMAByAxwXEZ8NO698cHznLxp6XgKI64PfSqYMavbyEUYONU7IWLfpVPUCJeNR3VwjI_ona3SY8ZhwfBcz7MMn6ZgFUo0xpoSu79NHlnMbNw7TyUyJLFr2zHRwv-cvJ2FjVtMFMizenQzxe2mYj1phjfGZwkIwpIAF-FwT7D46GOy' },
      { name: 'Refresh Matcha Smoothie', units: 194, width: 48, opacity: 'opacity-60', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBH5YmSMCU2SoKNtDhNyO3R5AVbqcHi8DfSNB3xeTEddLeRTvvaBjAP33JvrrEgH2zHL7REKHjIr_3qDvZUyXAH427IsuF1Tw4x-9iihq7vgcu1oS9zhXU_VI2ig8INTMxnM5gW2he3expnXfwUexFK5MHzUEmSisBsOFSmsbBJOMv8tbxqwpV3-vJZGScieVeCPA-_NeZpI5aSn33vGUVw203nsHCGRLUQhAyT6AWZU-jJcdGfTjzCNkTuKGKlwh1w5ddUzgtDWoWa' },
      { name: 'Baked Sweet Potato Fries', units: 156, width: 39, opacity: 'opacity-40', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDcge_b96Wsd-7HklzsXn1DUxVtwwO-Kp7IHFo4sO_SgfoGD8ANSaL_2iYFaKlts3UBVhlc0UF0rIWaZWHBikssr4KlLDgOMXkQiBj0NIUnjUPaQfk8xllUyLd-7zEObPTNyVpb8FMVeBaLx78xwIYBtm4yir23rjC5omEx_pkx6bSokiK3HGAPchFQUw6P3WTjmMKT1I8ICKBkx4imM3ElZ_VduEeNNUdTFHy2I-1JwOIBwenJ0NGWpWudUrtyHeVd6_s-d58S3rUA' }
    ]
  },
  Weekly: {
    summary: {
      totalRevenue: 83420,
      revenueChange: '+8.2% from last week',
      averageOrder: 8.98,
      averageLabel: 'Slight lift from lunch rush',
      itemsSold: 9788,
      itemsChange: '+6% vs target'
    },
    lineChart: {
      title: 'Weekly Sales Revenue',
      labels: ['W1', 'W2', 'W3', 'W4', 'W5', 'W6', 'W7'],
      points: [170, 150, 120, 110, 95, 70, 60],
      peakText: 'Peak: P12,482.20'
    },
    distribution: { completed: 79, pending: 15, canceled: 6 },
    topItems: [
      { name: 'Artisan Grilled Chicken Wrap', units: 2280, width: 88, opacity: 'opacity-100', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCXZa1n0wNpoeYkH-mURzTD7v1ChXukfQrlQmuZ9eH_oUmBdi1VAK_8rubTNNfODWvKFcouZBWR6deLFjxpV0rQAoEuzsA6d0zxbiw_1R-VZMwECI1rmWTdAYqcdyKxZSTD2D6wwUWGOieTg-69CXrKljc2VuQ8KdWkTuPDZ1NE380ymiyR5N4ejs1GecdNAleFvFZnitlPJ9PUSbppQmu6JNrFikEmaGFzx_4ekXmCkzXJPAbzYHoly98og4QH3JUSxTVMiHq_5ltk' },
      { name: 'Superfood Quinoa Bowl', units: 1918, width: 74, opacity: 'opacity-80', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB4FwAobqUSIciRUbXUs5i63OTgplNYWWSHRDzXmnvxeLJotk96dxQvWVrqyxqAgJ1Xuy-9j6KPbBRe7iW-BvStGGT1YuBnuvooqMAByAxwXEZ8NO698cHznLxp6XgKI64PfSqYMavbyEUYONU7IWLfpVPUCJeNR3VwjI_ona3SY8ZhwfBcz7MMn6ZgFUo0xpoSu79NHlnMbNw7TyUyJLFr2zHRwv-cvJ2FjVtMFMizenQzxe2mYj1phjfGZwkIwpIAF-FwT7D46GOy' },
      { name: 'Refresh Matcha Smoothie', units: 1302, width: 52, opacity: 'opacity-60', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBH5YmSMCU2SoKNtDhNyO3R5AVbqcHi8DfSNB3xeTEddLeRTvvaBjAP33JvrrEgH2zHL7REKHjIr_3qDvZUyXAH427IsuF1Tw4x-9iihq7vgcu1oS9zhXU_VI2ig8INTMxnM5gW2he3expnXfwUexFK5MHzUEmSisBsOFSmsbBJOMv8tbxqwpV3-vJZGScieVeCPA-_NeZpI5aSn33vGUVw203nsHCGRLUQhAyT6AWZU-jJcdGfTjzCNkTuKGKlwh1w5ddUzgtDWoWa' },
      { name: 'Baked Sweet Potato Fries', units: 915, width: 37, opacity: 'opacity-40', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDcge_b96Wsd-7HklzsXn1DUxVtwwO-Kp7IHFo4sO_SgfoGD8ANSaL_2iYFaKlts3UBVhlc0UF0rIWaZWHBikssr4KlLDgOMXkQiBj0NIUnjUPaQfk8xllUyLd-7zEObPTNyVpb8FMVeBaLx78xwIYBtm4yir23rjC5omEx_pkx6bSokiK3HGAPchFQUw6P3WTjmMKT1I8ICKBkx4imM3ElZ_VduEeNNUdTFHy2I-1JwOIBwenJ0NGWpWudUrtyHeVd6_s-d58S3rUA' }
    ]
  },
  Monthly: {
    summary: {
      totalRevenue: 312900,
      revenueChange: '+10.9% from last month',
      averageOrder: 9.12,
      averageLabel: 'Improved due to combo bundles',
      itemsSold: 35640,
      itemsChange: '+9% vs target'
    },
    lineChart: {
      title: 'Monthly Sales Revenue',
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
      points: [190, 165, 140, 120, 100, 85, 70],
      peakText: 'Peak: P48,930.00'
    },
    distribution: { completed: 81, pending: 11, canceled: 8 },
    topItems: [
      { name: 'Artisan Grilled Chicken Wrap', units: 9120, width: 90, opacity: 'opacity-100', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCXZa1n0wNpoeYkH-mURzTD7v1ChXukfQrlQmuZ9eH_oUmBdi1VAK_8rubTNNfODWvKFcouZBWR6deLFjxpV0rQAoEuzsA6d0zxbiw_1R-VZMwECI1rmWTdAYqcdyKxZSTD2D6wwUWGOieTg-69CXrKljc2VuQ8KdWkTuPDZ1NE380ymiyR5N4ejs1GecdNAleFvFZnitlPJ9PUSbppQmu6JNrFikEmaGFzx_4ekXmCkzXJPAbzYHoly98og4QH3JUSxTVMiHq_5ltk' },
      { name: 'Superfood Quinoa Bowl', units: 7510, width: 76, opacity: 'opacity-80', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB4FwAobqUSIciRUbXUs5i63OTgplNYWWSHRDzXmnvxeLJotk96dxQvWVrqyxqAgJ1Xuy-9j6KPbBRe7iW-BvStGGT1YuBnuvooqMAByAxwXEZ8NO698cHznLxp6XgKI64PfSqYMavbyEUYONU7IWLfpVPUCJeNR3VwjI_ona3SY8ZhwfBcz7MMn6ZgFUo0xpoSu79NHlnMbNw7TyUyJLFr2zHRwv-cvJ2FjVtMFMizenQzxe2mYj1phjfGZwkIwpIAF-FwT7D46GOy' },
      { name: 'Refresh Matcha Smoothie', units: 4960, width: 50, opacity: 'opacity-60', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBH5YmSMCU2SoKNtDhNyO3R5AVbqcHi8DfSNB3xeTEddLeRTvvaBjAP33JvrrEgH2zHL7REKHjIr_3qDvZUyXAH427IsuF1Tw4x-9iihq7vgcu1oS9zhXU_VI2ig8INTMxnM5gW2he3expnXfwUexFK5MHzUEmSisBsOFSmsbBJOMv8tbxqwpV3-vJZGScieVeCPA-_NeZpI5aSn33vGUVw203nsHCGRLUQhAyT6AWZU-jJcdGfTjzCNkTuKGKlwh1w5ddUzgtDWoWa' },
      { name: 'Baked Sweet Potato Fries', units: 3740, width: 38, opacity: 'opacity-40', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDcge_b96Wsd-7HklzsXn1DUxVtwwO-Kp7IHFo4sO_SgfoGD8ANSaL_2iYFaKlts3UBVhlc0UF0rIWaZWHBikssr4KlLDgOMXkQiBj0NIUnjUPaQfk8xllUyLd-7zEObPTNyVpb8FMVeBaLx78xwIYBtm4yir23rjC5omEx_pkx6bSokiK3HGAPchFQUw6P3WTjmMKT1I8ICKBkx4imM3ElZ_VduEeNNUdTFHy2I-1JwOIBwenJ0NGWpWudUrtyHeVd6_s-d58S3rUA' }
    ]
  }
};

const formatCurrency = (amount) => `P${amount.toLocaleString('en-PH', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;

export default function AnalyticsStatistics() {
  const [selectedPeriod, setSelectedPeriod] = useState('Monthly');
  const analytics = periodAnalytics[selectedPeriod];
  const linePath = analytics.lineChart.points
    .map((value, index) => `${index === 0 ? 'M' : 'L'}${index * 133.33},${value}`)
    .join(' ');

  return (
    <div className="p-8 lg:p-12">
      {/* Header Section */}
      <header className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <h2 className="text-4xl font-extrabold tracking-tight text-on-surface mb-2">Sales Analytics</h2>
          <p className="text-on-surface-variant font-body">Academic Dining Financial Overview & Insights</p>
        </div>
        {/* Date Range Filter */}
        <div className="inline-flex p-1 bg-surface-container-low rounded-lg shadow-inner">
          {Object.keys(periodAnalytics).map((period) => (
            <button
              key={period}
              onClick={() => setSelectedPeriod(period)}
              className={`px-4 py-2 text-sm font-semibold rounded-md transition-all ${
                selectedPeriod === period
                  ? 'bg-surface-container-lowest text-primary shadow-sm'
                  : 'text-on-surface-variant hover:bg-surface-container'
              }`}
            >
              {period}
            </button>
          ))}
        </div>
      </header>
      
      {/* Summary Metrics Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <div className="bg-surface-container-lowest p-6 rounded-xl border border-outline-variant/10 shadow-[0_12px_32px_-4px_rgba(26,28,28,0.04)] flex justify-between items-start">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-1">Total Revenue</p>
            <h3 className="text-3xl font-black text-primary">{formatCurrency(analytics.summary.totalRevenue)}</h3>
            <p className="text-xs text-tertiary-container mt-2 flex items-center font-semibold">
              <span className="material-symbols-outlined text-[14px] mr-1">trending_up</span> {analytics.summary.revenueChange}
            </p>
          </div>
          <div className="p-3 bg-primary-container/10 rounded-lg">
            <span className="material-symbols-outlined text-primary">payments</span>
          </div>
        </div>
        <div className="bg-surface-container-lowest p-6 rounded-xl border border-outline-variant/10 shadow-[0_12px_32px_-4px_rgba(26,28,28,0.04)] flex justify-between items-start">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-1">Average Order</p>
            <h3 className="text-3xl font-black text-on-surface">{formatCurrency(analytics.summary.averageOrder)}</h3>
            <p className="text-xs text-on-surface-variant mt-2 flex items-center font-medium">
              <span className="material-symbols-outlined text-[14px] mr-1">analytics</span> {analytics.summary.averageLabel}
            </p>
          </div>
          <div className="p-3 bg-secondary-container rounded-lg">
            <span className="material-symbols-outlined text-secondary">receipt_long</span>
          </div>
        </div>
        <div className="bg-surface-container-lowest p-6 rounded-xl border border-outline-variant/10 shadow-[0_12px_32px_-4px_rgba(26,28,28,0.04)] flex justify-between items-start">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-1">Items Sold</p>
            <h3 className="text-3xl font-black text-on-surface">{analytics.summary.itemsSold.toLocaleString('en-PH')}</h3>
            <p className="text-xs text-tertiary-container mt-2 flex items-center font-semibold">
              <span className="material-symbols-outlined text-[14px] mr-1">arrow_upward</span> {analytics.summary.itemsChange}
            </p>
          </div>
          <div className="p-3 bg-tertiary-fixed rounded-lg">
            <span className="material-symbols-outlined text-tertiary">inventory_2</span>
          </div>
        </div>
      </div>
      
      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Line Chart */}
        <div className="lg:col-span-8 bg-surface-container-lowest p-8 rounded-xl shadow-[0_12px_32px_-4px_rgba(26,28,28,0.06)]">
          <div className="flex justify-between items-center mb-10">
            <h4 className="text-xl font-bold tracking-tight">{analytics.lineChart.title}</h4>
            <span className="material-symbols-outlined text-on-surface-variant">more_horiz</span>
          </div>
          <div className="relative h-64 w-full flex items-end justify-between gap-1">
            <div className="absolute inset-0 flex flex-col justify-between pointer-events-none opacity-20 border-b border-zinc-200">
              <div className="border-t border-zinc-300 w-full h-0"></div>
              <div className="border-t border-zinc-300 w-full h-0"></div>
              <div className="border-t border-zinc-300 w-full h-0"></div>
              <div className="border-t border-zinc-300 w-full h-0"></div>
            </div>
            <svg className="absolute bottom-0 left-0 w-full h-full overflow-visible" preserveAspectRatio="none">
              <path d={linePath} fill="none" stroke="url(#lineGradient)" strokeLinecap="round" strokeWidth="4"></path>
              <defs>
                <linearGradient id="lineGradient" x1="0" x2="1" y1="0" y2="0">
                  <stop offset="0%" stopColor="#0d631b"></stop>
                  <stop offset="100%" stopColor="#2e7d32"></stop>
                </linearGradient>
              </defs>
            </svg>
            <div className="absolute left-1/2 top-12 -translate-x-1/2 bg-on-surface text-white px-3 py-1 rounded text-xs font-bold shadow-lg">
              {analytics.lineChart.peakText}
            </div>
            <div className="flex justify-between w-full mt-auto pt-4 text-[10px] uppercase font-black tracking-widest text-zinc-400">
              {analytics.lineChart.labels.map((label) => (
                <span key={label}>{label}</span>
              ))}
            </div>
          </div>
        </div>
        
        {/* Pie Chart */}
        <div className="lg:col-span-4 bg-surface-container-lowest p-8 rounded-xl shadow-[0_12px_32px_-4px_rgba(26,28,28,0.06)] flex flex-col">
          <h4 className="text-xl font-bold tracking-tight mb-8">Order Distribution</h4>
          <div className="relative w-48 h-48 mx-auto mb-10">
            <svg className="w-full h-full" viewBox="0 0 36 36">
              <circle cx="18" cy="18" fill="transparent" r="15.9" stroke="#eeeeee" strokeWidth="4"></circle>
              <circle cx="18" cy="18" fill="transparent" r="15.9" stroke="#0d631b" strokeDasharray="75 100" strokeDashoffset="25" strokeWidth="4"></circle>
              <circle cx="18" cy="18" fill="transparent" r="15.9" stroke="#506169" strokeDasharray="15 100" strokeDashoffset="100" strokeWidth="4"></circle>
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-2xl font-black">100%</span>
              <span className="text-[10px] uppercase tracking-tighter text-zinc-400">Processed</span>
            </div>
          </div>
          <div className="space-y-3 mt-auto">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-primary"></div>
                <span className="text-sm font-medium">Completed</span>
              </div>
              <span className="text-sm font-bold">{analytics.distribution.completed}%</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-secondary"></div>
                <span className="text-sm font-medium">Pending</span>
              </div>
              <span className="text-sm font-bold">{analytics.distribution.pending}%</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-error"></div>
                <span className="text-sm font-medium">Canceled</span>
              </div>
              <span className="text-sm font-bold">{analytics.distribution.canceled}%</span>
            </div>
          </div>
        </div>
        
        {/* Top Selling Items */}
        <div className="lg:col-span-12 bg-surface-container-lowest p-8 rounded-xl shadow-[0_12px_32px_-4px_rgba(26,28,28,0.06)]">
          <div className="flex justify-between items-center mb-8">
            <h4 className="text-xl font-bold tracking-tight">Top Selling Items</h4>
            <button className="text-primary text-xs font-bold hover:underline">View Full Menu Performance</button>
          </div>
          <div className="space-y-6">
            {analytics.topItems.map((item) => (
              <div key={item.name} className="group">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-bold text-on-surface flex items-center">
                    <img className="w-8 h-8 rounded-full mr-3 object-cover" src={item.image} alt="Item" />
                    {item.name}
                  </span>
                  <span className="text-sm font-black text-on-surface">{item.units.toLocaleString('en-PH')} Units</span>
                </div>
                <div className="h-3 w-full bg-surface-container rounded-full overflow-hidden">
                  <div
                    className={`h-full bg-gradient-to-r from-primary to-primary-container rounded-full ${item.opacity}`}
                    style={{ width: `${item.width}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Recent Activity Table */}
      <div className="mt-12 bg-surface-container-lowest p-8 rounded-xl shadow-[0_12px_32px_-4px_rgba(26,28,28,0.06)]">
        <h4 className="text-xl font-bold tracking-tight mb-8">Recent Large Transactions</h4>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="text-[10px] uppercase font-black tracking-widest text-zinc-400">
                <th className="pb-6 px-4">Student ID</th>
                <th className="pb-6 px-4">Item Details</th>
                <th className="pb-6 px-4 text-center">Status</th>
                <th className="pb-6 px-4 text-right">Amount</th>
              </tr>
            </thead>
            <tbody className="text-sm font-medium">
              <tr className="hover:bg-surface-container-low transition-colors group">
                <td className="py-5 px-4 font-black">#BC-20918</td>
                <td className="py-5 px-4 text-on-surface-variant italic">Bulk order: Class 5B Lunch Prep</td>
                <td className="py-5 px-4 text-center">
                  <span className="bg-tertiary-container text-on-tertiary-container px-3 py-1 rounded-full text-[10px] font-bold uppercase">Success</span>
                </td>
                <td className="py-5 px-4 text-right font-black text-primary">₱182.40</td>
              </tr>
              <tr className="hover:bg-surface-container-low transition-colors group">
                <td className="py-5 px-4 font-black">#BC-20842</td>
                <td className="py-5 px-4 text-on-surface-variant italic">Teacher's Lounge Weekly Tab</td>
                <td className="py-5 px-4 text-center">
                  <span className="bg-tertiary-container text-on-tertiary-container px-3 py-1 rounded-full text-[10px] font-bold uppercase">Success</span>
                </td>
                <td className="py-5 px-4 text-right font-black text-primary">₱45.10</td>
              </tr>
              <tr className="hover:bg-surface-container-low transition-colors group">
                <td className="py-5 px-4 font-black">#BC-20755</td>
                <td className="py-5 px-4 text-on-surface-variant italic">Vending Replenishment</td>
                <td className="py-5 px-4 text-center">
                  <span className="bg-secondary-container text-on-secondary-container px-3 py-1 rounded-full text-[10px] font-bold uppercase">Pending</span>
                </td>
                <td className="py-5 px-4 text-right font-black text-primary">₱210.00</td>
              </tr>
              <tr className="hover:bg-surface-container-low transition-colors group">
                <td className="py-5 px-4 font-black">#BC-20712</td>
                <td className="py-5 px-4 text-on-surface-variant italic">Sports Day Catering Deposit</td>
                <td className="py-5 px-4 text-center">
                  <span className="bg-tertiary-container text-on-tertiary-container px-3 py-1 rounded-full text-[10px] font-bold uppercase">Success</span>
                </td>
                <td className="py-5 px-4 text-right font-black text-primary">₱500.00</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
