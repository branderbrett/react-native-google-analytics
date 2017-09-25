import Click from './lib/actions/Click';
import Detail from './lib/actions/Detail';
import PromoClick from './lib/actions/PromoClick';

import Event from './lib/hits/Event';
import Exception from './lib/hits/Exception';
import Impression from './lib/hits/Impression';
import PageView from './lib/hits/PageView';
import Product from './lib/hits/Product';
import Promo from './lib/hits/Promo';
import ScreenView from './lib/hits/ScreenView';
import Social from './lib/hits/Social';
import Timing from './lib/hits/Timing';
import Transaction from './lib/hits/Transaction';
import Item from './lib/hits/Item';

import _Analytics from './lib/Analytics';
import _Experiment from './lib/Experiment';

export const Hits = {
  Event,
  Exception,
  Impression,
  PageView,
  Product,
  Promo,
  ScreenView,
  Social,
  Timing,
  Transaction,
  Item
};

export const Actions = {
  Click,
  Detail,
  PromoClick
};

export const Analytics = _Analytics;
export const Experiment = _Experiment;
